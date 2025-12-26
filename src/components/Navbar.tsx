"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        // Prevent scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoAccent}>LUXE</span>
                    <span>Properties</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/contact" className={styles.ctaButton}>
                    Get in Touch
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.menuButton} ${isMobileMenuOpen ? styles.open : ""}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
                <ul className={styles.mobileNavLinks}>
                    {navLinks.map((link, index) => (
                        <li
                            key={link.href}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Link
                                href={link.href}
                                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="/contact" className={styles.mobileCta}>
                    Get in Touch
                </Link>
            </div>
        </header>
    );
}

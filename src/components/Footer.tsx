import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
    company: [
        { href: "/about", label: "About Us" },
        { href: "/properties", label: "Properties" },
        { href: "/contact", label: "Contact" },
    ],
    properties: [
        { href: "/properties?type=apartment", label: "Apartments" },
        { href: "/properties?type=villa", label: "Villas" },
        { href: "/properties?type=penthouse", label: "Penthouses" },
    ],
    contact: [
        { label: "contact@luxeproperties.com", type: "email" },
        { label: "+1 (555) 123-4567", type: "phone" },
        { label: "123 Luxury Avenue, Suite 100", type: "address" },
    ],
};

const socialLinks = [
    { href: "#", label: "Facebook", icon: "FB" },
    { href: "#", label: "Instagram", icon: "IG" },
    { href: "#", label: "LinkedIn", icon: "LI" },
    { href: "#", label: "Twitter", icon: "X" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoAccent}>LUXE</span>
                            <span>Properties</span>
                        </Link>
                        <p className={styles.brandDescription}>
                            Discover exceptional properties that redefine luxury living.
                            Your dream home awaits with Luxe Properties.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={styles.socialLink}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.linkGroupTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Properties Links */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.linkGroupTitle}>Properties</h4>
                        <ul className={styles.linkList}>
                            {footerLinks.properties.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.linkGroupTitle}>Contact</h4>
                        <ul className={styles.linkList}>
                            {footerLinks.contact.map((item, index) => (
                                <li key={index} className={styles.contactItem}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} Luxe Properties. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy" className={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={styles.legalLink}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { useEffect, useRef, ReactNode } from "react";
import styles from "./AnimatedSection.module.css";

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
    delay?: number;
    className?: string;
    threshold?: number;
}

export default function AnimatedSection({
    children,
    animation = "fadeInUp",
    delay = 0,
    className = "",
    threshold = 0.1,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add(styles.visible);
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay, threshold]);

    return (
        <div
            ref={ref}
            className={`${styles.animated} ${styles[animation]} ${className}`}
        >
            {children}
        </div>
    );
}

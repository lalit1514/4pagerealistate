"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Properties Sold" },
    { value: 1200, suffix: "+", label: "Happy Clients" },
    { value: 50, suffix: "M+", label: "Property Value" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2000;
                    const steps = 60;
                    const increment = value / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <span ref={ref} className={styles.value}>
            {count}
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            <span className={styles.label}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

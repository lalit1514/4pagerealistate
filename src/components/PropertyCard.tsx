import Image from "next/image";
import Link from "next/link";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
    id: string;
    title: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    image: string;
    type: string;
}

export default function PropertyCard({
    id,
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    area,
    image,
    type,
}: PropertyCardProps) {
    return (
        <Link href={`/properties/${id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <span className={styles.viewButton}>View Details</span>
                </div>
                <span className={styles.badge}>{type}</span>
            </div>
            <div className={styles.content}>
                <div className={styles.priceRow}>
                    <span className={styles.price}>{price}</span>
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.location}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    {location}
                </p>
                <div className={styles.features}>
                    <div className={styles.feature}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                            <path d="M21 7H3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2z" />
                        </svg>
                        <span>{bedrooms} Beds</span>
                    </div>
                    <div className={styles.feature}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 12h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
                            <path d="M6 12V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7" />
                        </svg>
                        <span>{bathrooms} Baths</span>
                    </div>
                    <div className={styles.feature}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18M9 21V9" />
                        </svg>
                        <span>{area}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

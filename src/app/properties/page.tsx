"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import styles from "./page.module.css";

const allProperties = [
    {
        id: "1",
        title: "Modern Waterfront Villa",
        location: "Bandra West, Mumbai",
        price: "₹12.5 Cr",
        bedrooms: 5,
        bathrooms: 4,
        area: "4,200 sqft",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
        type: "Villa",
    },
    {
        id: "2",
        title: "Luxury Downtown Penthouse",
        location: "Powai, Mumbai",
        price: "₹8.75 Cr",
        bedrooms: 4,
        bathrooms: 3,
        area: "3,500 sqft",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        type: "Penthouse",
    },
    {
        id: "3",
        title: "Contemporary Hill Estate",
        location: "Lonavala, Maharashtra",
        price: "₹15.5 Cr",
        bedrooms: 6,
        bathrooms: 5,
        area: "6,800 sqft",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        type: "Villa",
    },
    {
        id: "4",
        title: "Sea View Apartment",
        location: "Worli, Mumbai",
        price: "₹4.25 Cr",
        bedrooms: 3,
        bathrooms: 2,
        area: "2,100 sqft",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        type: "Apartment",
    },
    {
        id: "5",
        title: "Heritage Bungalow",
        location: "Jubilee Hills, Hyderabad",
        price: "₹18.5 Cr",
        bedrooms: 7,
        bathrooms: 6,
        area: "7,500 sqft",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        type: "Villa",
    },
    {
        id: "6",
        title: "Modern City Apartment",
        location: "Koramangala, Bangalore",
        price: "₹2.85 Cr",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,800 sqft",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        type: "Apartment",
    },
    {
        id: "7",
        title: "Beachfront Villa",
        location: "ECR, Chennai",
        price: "₹9.75 Cr",
        bedrooms: 5,
        bathrooms: 5,
        area: "5,500 sqft",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
        type: "Villa",
    },
    {
        id: "8",
        title: "Skyline Penthouse Suite",
        location: "Golf Course Road, Gurgaon",
        price: "₹7.5 Cr",
        bedrooms: 4,
        bathrooms: 4,
        area: "4,000 sqft",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        type: "Penthouse",
    },
    {
        id: "9",
        title: "Premium Family Flat",
        location: "Whitefield, Bangalore",
        price: "₹1.85 Cr",
        bedrooms: 4,
        bathrooms: 3,
        area: "3,200 sqft",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        type: "Apartment",
    },
];

const filterTypes = ["All", "Villa", "Apartment", "Penthouse"];

export default function PropertiesPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProperties =
        activeFilter === "All"
            ? allProperties
            : allProperties.filter((p) => p.type === activeFilter);

    return (
        <>
            {/* Page Header */}
            <section className={styles.header}>
                <div className={styles.headerOverlay}></div>
                <div className={styles.headerContent}>
                    <AnimatedSection animation="fadeInUp">
                        <span className={styles.headerSubtitle}>Our Portfolio</span>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <h1 className={styles.headerTitle}>Properties</h1>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={400}>
                        <p className={styles.headerDescription}>
                            Explore our exclusive collection of luxury properties
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Properties Grid */}
            <section className={`section ${styles.properties}`}>
                <div className="container">
                    {/* Filter Buttons */}
                    <AnimatedSection animation="fadeInUp">
                        <div className={styles.filters}>
                            {filterTypes.map((type) => (
                                <button
                                    key={type}
                                    className={`${styles.filterButton} ${activeFilter === type ? styles.active : ""
                                        }`}
                                    onClick={() => setActiveFilter(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Properties Grid */}
                    <div className={styles.grid}>
                        {filteredProperties.map((property, index) => (
                            <AnimatedSection
                                key={property.id}
                                animation="fadeInUp"
                                delay={index * 100}
                            >
                                <PropertyCard {...property} />
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredProperties.length === 0 && (
                        <div className={styles.noResults}>
                            <p>No properties found for the selected filter.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

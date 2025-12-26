import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PropertyCard from "@/components/PropertyCard";
import Stats from "@/components/Stats";
import styles from "./page.module.css";

// Sample property data
const featuredProperties = [
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
    type: "Estate",
  },
];

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Trusted Excellence",
    description: "Over 15 years of delivering exceptional real estate services with integrity.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "24/7 Support",
    description: "Round-the-clock assistance to address all your property needs and queries.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Prime Locations",
    description: "Exclusive access to premium properties in the most sought-after neighborhoods.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Market Expertise",
    description: "In-depth market knowledge to help you make informed investment decisions.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Luxury Property"
            fill
            priority
            quality={90}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <span className={styles.heroSubtitle}>Welcome to Luxe Properties</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={400}>
            <h1 className={styles.heroTitle}>
              Discover Your
              <br />
              <span className={styles.heroAccent}>Dream Home</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={600}>
            <p className={styles.heroDescription}>
              Experience luxury living at its finest. We curate exceptional properties
              that match your lifestyle and aspirations.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className={styles.heroButtons}>
              <Link href="/properties" className="btn btn-primary">
                Explore Properties
              </Link>
              <Link href="/contact" className="btn btn-outline-light">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className={styles.scrollIndicator}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={styles.scrollArrow}
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className={`section ${styles.featured}`}>
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <div className="section-header">
              <span className="section-subtitle">Featured Listings</span>
              <h2 className="section-title">Exceptional Properties</h2>
              <p className="section-description">
                Handpicked selection of our finest properties, each offering a unique
                blend of luxury, comfort, and prime location.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.propertyGrid}>
            {featuredProperties.map((property, index) => (
              <AnimatedSection
                key={property.id}
                animation="fadeInUp"
                delay={index * 150}
              >
                <PropertyCard {...property} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fadeInUp" delay={500}>
            <div className={styles.viewAll}>
              <Link href="/properties" className="btn btn-secondary">
                View All Properties
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Why Choose Us Section */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <AnimatedSection animation="fadeInUp">
            <div className="section-header">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">The Luxe Difference</h2>
              <p className="section-description">
                What sets us apart in the world of luxury real estate.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Luxury Interior"
            fill
            className={styles.ctaImage}
          />
          <div className={styles.ctaOverlay}></div>
        </div>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="fadeInUp">
            <h2 className={styles.ctaTitle}>Ready to Find Your Perfect Home?</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className={styles.ctaDescription}>
              Let our expert team guide you through the journey of finding your dream property.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={400}>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import styles from "./page.module.css";

const team = [
    {
        name: "Rajesh Sharma",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        bio: "20+ years in luxury real estate",
    },
    {
        name: "Priya Kapoor",
        role: "Head of Sales",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        bio: "Expert in high-end property negotiations",
    },
    {
        name: "Amit Patel",
        role: "Property Consultant",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        bio: "Specializing in premium properties",
    },
    {
        name: "Sneha Reddy",
        role: "Investment Advisor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
        bio: "Real estate investment strategist",
    },
];

const timeline = [
    { year: "2009", title: "Founded", description: "Luxe Properties was established in Mumbai." },
    { year: "2012", title: "Expansion", description: "Opened offices in Delhi and Bangalore." },
    { year: "2016", title: "500+ Sales", description: "Reached milestone of 500 properties sold." },
    { year: "2020", title: "Digital First", description: "Launched virtual property tours platform." },
    { year: "2024", title: "Leading Firm", description: "Recognized as India's top luxury real estate firm." },
];

const testimonials = [
    {
        quote: "Luxe Properties made our dream home a reality. Their attention to detail and personalized service exceeded all expectations.",
        author: "Vikram & Anjali Mehta",
        location: "Bandra, Mumbai",
    },
    {
        quote: "The team&apos;s market knowledge and negotiation skills saved us significant money on our penthouse purchase. Highly recommended!",
        author: "Suresh Krishnamurthy",
        location: "Koramangala, Bangalore",
    },
    {
        quote: "From the first consultation to closing, the experience was seamless. They truly understand luxury living.",
        author: "Neha Agarwal",
        location: "Golf Course Road, Gurgaon",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className={styles.header}>
                <div className={styles.headerOverlay}></div>
                <div className={styles.headerContent}>
                    <AnimatedSection animation="fadeInUp">
                        <span className={styles.headerSubtitle}>Our Story</span>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={200}>
                        <h1 className={styles.headerTitle}>About Us</h1>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={400}>
                        <p className={styles.headerDescription}>
                            Redefining luxury real estate since 2009
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Story Section */}
            <section className={`section ${styles.story} `}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <AnimatedSection animation="fadeInLeft" className={styles.storyContent}>
                            <span className={styles.storySubtitle}>Who We Are</span>
                            <h2 className={styles.storyTitle}>A Legacy of Excellence</h2>
                            <p className={styles.storyText}>
                                Founded in 2009, Luxe Properties has grown from a boutique real estate
                                agency to one of the most trusted names in luxury property. Our journey
                                began with a simple mission: to connect discerning clients with
                                exceptional homes that match their unique lifestyles.
                            </p>
                            <p className={styles.storyText}>
                                Today, we pride ourselves on our curated portfolio of premium properties,
                                our deep market expertise, and our unwavering commitment to personalized
                                service. Every member of our team shares a passion for real estate and
                                a dedication to exceeding client expectations.
                            </p>
                            <div className={styles.storyStats}>
                                <div className={styles.storyStat}>
                                    <span className={styles.storyStatValue}>15+</span>
                                    <span className={styles.storyStatLabel}>Years Experience</span>
                                </div>
                                <div className={styles.storyStat}>
                                    <span className={styles.storyStatValue}>500+</span>
                                    <span className={styles.storyStatLabel}>Properties Sold</span>
                                </div>
                                <div className={styles.storyStat}>
                                    <span className={styles.storyStatValue}>98%</span>
                                    <span className={styles.storyStatLabel}>Client Satisfaction</span>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fadeInRight" className={styles.storyImage}>
                            <Image
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                                alt="Our Story"
                                fill
                                className={styles.image}
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={`section ${styles.timeline} `}>
                <div className="container">
                    <AnimatedSection animation="fadeInUp">
                        <div className="section-header">
                            <span className="section-subtitle">Our Journey</span>
                            <h2 className="section-title">Milestones</h2>
                        </div>
                    </AnimatedSection>
                    <div className={styles.timelineGrid}>
                        {timeline.map((item, index) => (
                            <AnimatedSection
                                key={item.year}
                                animation="fadeInUp"
                                delay={index * 100}
                            >
                                <div className={styles.timelineItem}>
                                    <span className={styles.timelineYear}>{item.year}</span>
                                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                                    <p className={styles.timelineDescription}>{item.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={`section ${styles.team} `}>
                <div className="container">
                    <AnimatedSection animation="fadeInUp">
                        <div className="section-header">
                            <span className="section-subtitle">Meet The Team</span>
                            <h2 className="section-title">Our Experts</h2>
                            <p className="section-description">
                                A dedicated team of professionals committed to finding your perfect property.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <AnimatedSection
                                key={member.name}
                                animation="fadeInUp"
                                delay={index * 100}
                            >
                                <div className={styles.teamCard}>
                                    <div className={styles.teamImageWrapper}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className={styles.teamImage}
                                        />
                                    </div>
                                    <div className={styles.teamInfo}>
                                        <h3 className={styles.teamName}>{member.name}</h3>
                                        <span className={styles.teamRole}>{member.role}</span>
                                        <p className={styles.teamBio}>{member.bio}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={`section ${styles.testimonials} `}>
                <div className="container">
                    <AnimatedSection animation="fadeInUp">
                        <div className="section-header">
                            <span className="section-subtitle">Client Stories</span>
                            <h2 className="section-title">What They Say</h2>
                        </div>
                    </AnimatedSection>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial, index) => (
                            <AnimatedSection
                                key={index}
                                animation="fadeInUp"
                                delay={index * 100}
                            >
                                <div className={styles.testimonialCard}>
                                    <div className={styles.quoteIcon}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                        </svg>
                                    </div>
                                    <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                                    <div className={styles.testimonialAuthor}>
                                        <span className={styles.authorName}>{testimonial.author}</span>
                                        <span className={styles.authorLocation}>{testimonial.location}</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.error : ""}`}
                    placeholder=" "
                />
                <label htmlFor="name" className={styles.label}>
                    Your Name
                </label>
                {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.error : ""}`}
                    placeholder=" "
                />
                <label htmlFor="email" className={styles.label}>
                    Email Address
                </label>
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder=" "
                />
                <label htmlFor="phone" className={styles.label}>
                    Phone Number (Optional)
                </label>
            </div>

            <div className={styles.formGroup}>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
                    placeholder=" "
                    rows={5}
                />
                <label htmlFor="message" className={styles.label}>
                    Your Message
                </label>
                {errors.message && (
                    <span className={styles.errorMessage}>{errors.message}</span>
                )}
            </div>

            <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <span className={styles.spinner}></span>
                ) : isSubmitted ? (
                    <>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Message Sent!
                    </>
                ) : (
                    "Send Message"
                )}
            </button>

            {isSubmitted && (
                <p className={styles.successMessage}>
                    Thank you for reaching out! We&apos;ll get back to you shortly.
                </p>
            )}
        </form>
    );
}

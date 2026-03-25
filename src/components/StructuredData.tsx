import React from "react"

// 1. Organization Schema
export const OrganizationSchema = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Moonstack",
        url: "https://moonstack.co", // Replace with your actual URL
        logo: "https://moonstack.co/logo.png", // Replace with actual logo URL
        description: "Digital Product Studio",
        sameAs: [
            "https://www.linkedin.com/company/moonstack", // Update with your actual socials
            "https://twitter.com/moonstack",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-xxx-xxx-xxxx", // Update with your actual info
            contactType: "customer service",
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

// 2. WebSite Schema
export const WebSiteSchema = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Moonstack",
        url: "https://moonstack.co",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://moonstack.co/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

// 3. Service Schema
interface ServiceSchemaProps {
    name: string
    description: string
    providerName?: string
    url?: string
}

export const ServiceSchema = ({
    name,
    description,
    providerName = "Moonstack",
    url,
}: ServiceSchemaProps) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
            "@type": "Organization",
            name: providerName,
        },
        ...(url && { url }),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

// 4. Breadcrumb Schema
interface BreadcrumbItem {
    name: string
    url: string
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

// 5. FAQ Schema
interface FAQItem {
    question: string
    answer: string
}

export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}

import React from "react";
import Image, { StaticImageData } from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="dark-bg">
            <div className="flex">
                
                <div className="flex-full">
                    <ProjectsCard
                        title="OrderRave – QR Menu & Ordering Platform"
                        icon="/icons/code.svg"
                        description="I designed and led the full-stack build of OrderRave, a multi-vendor ordering system powering restaurants, cafes, and hotels in Nigeria. It features QR menus, real-time order routing, and Paystack payments — processing ₦10M+ in just 6 months."
                        link="https://orderrave.ng"
                    />

                    <ProjectsCard
                        title="OrderRave – Vendor Dashboard & Wallet System"
                        icon="/icons/code.svg"
                        description="Architected the vendor-facing side of OrderRave, including analytics, order lifecycle management, and a wallet + commission system with Laravel Queues, Webhooks, and Paystack inline payments."
                        link="https://app.orderrave.ng"
                    />

                    <ProjectsCard
                        title="Lekture – Free e-Learning Platform"
                        icon="/icons/code.svg"
                        description="Solo-developed a global e-learning site for students in underserved regions using Next.js and FaunaDB. With CDN-first delivery and lesson caching, it scaled to 1,000+ users across 5 continents."
                        link="https://lekture.vercel.app"
                    />

                    <ProjectsCard
                        title="HRmaneja – HR for African SMEs"
                        icon="/icons/code.svg"
                        description="Built a full HR suite from scratch — onboarding, payroll, reviews — in React and Node.js, tailored to African businesses. Integrated real-time workflows and role-based access for growing teams."
                        link="https://hrmaneja.vercel.app"
                    />

                    <ProjectsCard
                        title="BeautyGO – Spa & Wellness SaaS (Italy)"
                        icon="/icons/code.svg"
                        description="Worked with an Italian wellness chain to develop a Laravel + Swift-based booking system. Introduced Redis caching and smart slot allocations, improving staff utilization and API speeds by 40%."
                        link="https://beautygo.it"
                    />

                    <ProjectsCard
                        title="Till POS – Daily Transactions Dashboard"
                        icon="/icons/code.svg"
                        description="Built high-performance admin dashboards in React + TypeScript for a POS company handling 10K+ daily transactions. Leveraged GraphQL batching and hooks to cut load times by 35%."
                        link="https://oolio.com"
                    />

                    <ProjectsCard
                        title="Purple INC – Real Estate Tenant Portal"
                        icon="/icons/code.svg"
                        description="Delivered a self-service tenant portal using Laravel and React, handling rent payments (Stripe), document uploads, and maintenance requests for 1,000+ users across Nigeria."
                        link="https://purple.xyz"
                    />

                    <ProjectsCard
                        title="54Gene – Hiring Automation Tool"
                        icon="/icons/code.svg"
                        description="Led backend development on a Laravel-based internal tool that automated job applicant tracking and reduced hiring cycles by 50% at a leading African genomics startup."
                        link="https://54gene.com"
                    />

                    <ProjectsCard
                        title="54Gene – GenePay Internal Payment System"
                        icon="/icons/code.svg"
                        description="Built GenePay, a secure Laravel + React system for handling payroll disbursements and financial logging within the healthtech space. Emphasis on audit logs, speed, and data consistency."
                        link="https://54gene.com"
                    />

                </div>

                <div className="flex-full about-text">
                    <h5 className="gray">Projects</h5>
                    <h1 className="green">Building Solutions That Scale</h1>
                    <h3 className="white">From vision to victory: my work in action.</h3>
                    <p className="gray"> I’ve shipped software that helps food vendors earn faster, HR teams simplify payroll, and logistics companies track 50,000+ shipments a day — all while working with teams across Nigeria, Italy, and the Middle East. I care deeply about building things that last: systems that scale, dashboards that feel smooth, APIs that don’t break under pressure. My work bridges real human needs with technical execution — from Laravel queues to React dashboards to dev mentoring. </p>
                    <br/>
                    <a className="green" href="mailto:godfredakpan@gmail.com">Let us work together</a>
                </div>
            </div>
        </section>
    );
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    link?: string,
};

function ProjectsCard({ title, icon, description, link }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            {link && (
                <a className="button-8" href={link} target="_blank" rel="noreferrer">
                    Visit Project
                </a>
            )}
        </div>
    );
}
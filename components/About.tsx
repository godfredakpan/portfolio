import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                

                <div className="flex-full about-text">
                    <h5 className="gray">Bio</h5>
                    <h1 className="green">Hello, I&apos;m Godfred</h1>
                    <h3 className="white">I build impactful, scalable solutions.</h3>
                    <p className="gray">
                        I&apos;m a full-stack developer with over 8 years of experience delivering e-commerce, logistics, and SaaS platforms. I specialize in React, Node.js, Laravel, and AWS, creating high-performance systems that drive business growth. From slashing deployment times by 30% to boosting user retention by 25%, I focus on measurable outcomes. I thrive in fast-paced startups, leading sprints, mentoring teams, and writing clean, maintainable code.
                        <br/><br/>
                        Let&apos;s build something that solves real problems and delivers value.
                    </p>
                    <br/>
                    <a className="green" href="mailto:godfredakpan@gmail.com">Let us work together</a>
                </div>

                <div className="flex-full">
                    <AboutCard
                        title="Web App Development"
                        icon="/icons/code.svg"
                        description="I develop scalable web platforms using React, Next.js, Laravel, and TypeScript, driving performance and user engagement."
                    />
                    <AboutCard
                        title="Mobile App Development"
                        icon="/icons/phone.svg"
                        description="I build cross-platform mobile apps with React Native and Swift, delivering seamless UI/UX and robust integrations."
                    />
                    <AboutCard
                        title="Tech Mentor & Speaker"
                        icon="/icons/mic.svg"
                        description="I mentor developers and share insights on building scalable systems through podcasts and tech talks."
                    />
                    <AboutCard
                        title="Cloud & DevOps"
                        icon="/icons/server.svg"
                        description="I deploy and manage high-availability apps on AWS and Docker, optimizing for scale and reliability."
                    />
                </div>
            </div>
        </section>
    );
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
};

function AboutCard({ title, icon, description }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
        </div>
    );
}
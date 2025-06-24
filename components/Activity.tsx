import React from "react";
import Image from "next/image";

export default function Activity() {
    return (
        <section id="activity" className="dark-bg">
            <div className="flex">
                <div className="flex-full about-text">
                    <h5 className="gray">Engineering Stories</h5>
                    <h1 className="green">Lessons From the Code</h1>
                    <h3 className="white">Real-world challenges. Practical solutions.</h3>
                    <p className="gray">
                        I’ve built and scaled platforms for logistics, HR, food delivery, wellness, and payments across Africa and Europe. These are some of the stories and engineering decisions that shaped those systems.
                    </p>
                    <br/>
                    <a className="green" href="mailto:hello@godfredakpan.com">Let us work together</a>
                </div>
                <div className="flex-full">
                    {stories.map(({ title, context, description }) => (
                        <StoryCard
                            key={title}
                            title={title}
                            context={context}
                            description={description}
                        />
                    ))}
                </div>
            </div>

            <div className="flex-full about-text">
                <h5 className="gray">Podcasts</h5>
                <h1 className="green">Conversations Worth Sharing</h1>
                <h3 className="white">Tech, career, and impact from my voice.</h3>
                <p className="gray">
                    I&apos;ve shared thoughts and insights on building products, scaling infrastructure, mentoring teams, and navigating tech careers — all through podcast appearances and interviews.
                </p>
            </div>
            <div className="flex" style={{ gap: "1rem" }}>
                {podcasts.map(({ title, context, description, link }) => (
                    <PodcastCard
                        key={title}
                        title={title}
                        context={context}
                        description={description}
                        link={link}
                    />
                ))}
            </div>

            <div className="flex partners justify-space">
                {partners.map(({ href, src, alt }) => (
                    <a key={alt} href={href} target="_blank" rel="noreferrer">
                        <Image src={src} height={150} width={180} alt={alt} />
                    </a>
                ))}
            </div>
        </section>
    );
}

const stories = [
    {
        title: "Engineering Without Borders",
        context: "Rodud Logistics (Remote / Middle East)",
        description: "At Rodud, I led engineering across time zones — from designing async APIs to coordinating deployments that powered 50K+ daily transactions. Our edge? Scalable Node.js services and a trust-based remote culture."
    },
    {
        title: "Building Dev Tools for Africa",
        context: "HRmaneja, TillPOS, Posterbot.ai",
        description: "I built platforms that helped HR teams and retailers manage attendance, payroll, and sales reporting. Everything was designed for low bandwidth, high reliability, and scale across small businesses in Nigeria."
    },
    {
        title: "Scaling Laravel Apps with Queues and Workers",
        context: "OrderRave.ng",
        description: "We built a Laravel platform that served thousands of vendors and handled ₦150M+ in payments. I implemented a Redis queue system for orders, email notifications, and commission handling — all processed in seconds."
    },
    {
        title: "Breaking into Tech Without a CS Degree",
        context: "Personal Journey",
        description: "From a Philosophy degree to full-stack engineering — I taught myself Laravel and JavaScript, and learned to ship real products while solving real problems. Now I lead dev teams and build systems used globally."
    },
    {
        title: "Tech Leadership & Startup Engineering",
        context: "BeautyGO & TillPOS",
        description: "From leading frontend architecture to mentoring interns, I helped scale two production systems in wellness and retail. My priority: deliver value fast, document clearly, and empower other engineers to do the same."
    }
];

const podcasts = [
    {
        title: "Introducing Cyber Security",
        context: "Dev Insights",
        description: "Foundational principles of Cyber Security and how developers can improve their security mindset in daily engineering work.",
        link: "https://open.spotify.com/episode/4hZZp14XwnFD2QY5Jaq0KL?si=GuT4udYLRyOx0Nz74aWgkQ"
    },
    {
        title: "Ask Me Anything – PART 1",
        context: "Dev Insights",
        description: "Conversations on being a CTO and senior engineer working remotely, building tools like OrderRave and HRmaneja from scratch.",
        link: "https://open.spotify.com/episode/3gUINHM8Zz6qtMFqny4ofq?si=eV1SSzYbTDSDqmgRgc8K_w"
    },
    {
        title: "Ask Me Anything – PART 2",
        context: "Dev Insights",
        description: "Mentorship, managing cross-functional teams, shipping fast in startup environments, and automating onboarding workflows.",
        link: "https://open.spotify.com/episode/4XW7KwzD5yUWjRnQ1tbPuz?si=e3YrcZEWTWWXMrJ-XOz2lQ"
    },
    {
        title: "The Next Big Thing [Intro]",
        context: "The Next Big Thing",
        description: "Exploring innovation and the systems that drive modern platforms — from e-learning (Lekture) to healthtech (BeautyGO).",
        link: "https://spotifyanchor-web.app.link/e/NkgmBS6u4yb"
    }
];

const partners = [
    { href: "https://54gene.com/", src: "/images/partners/54gene.svg", alt: "54gene" },
    { href: "https://actual.ly/", src: "/images/partners/actually.svg", alt: "actually" },
    { href: "https://hrmaneja.com/", src: "/images/partners/hrmaneja.svg", alt: "hrmaneja" },
    { href: "https://irunauto.com/", src: "/images/partners/irun.svg", alt: "irun" },
    { href: "https://www.posterbot.ai/", src: "/images/partners/posterbot.svg", alt: "posterbot" },
    { href: "https://purple.xyz/", src: "/images/partners/purple.svg", alt: "purple" },
    { href: "https://oolio.com/", src: "/images/partners/tillpos.svg", alt: "tillpos" },
    { href: "https://www.volibra.com/", src: "/images/partners/volibra.svg", alt: "volibra" }
];

type Props = {
    title: string;
    context: string;
    description: string;
    link?: string;
};

function StoryCard({ title, context, description }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h4 className="green">{title}</h4>
                <p className="white">{context}</p>
            </div>
            <p className="white">{description}</p>
        </div>
    );
}

function PodcastCard({ title, context, description, link }: Props) {
    return (
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h4 className="green">{title}</h4>
                <p className="white">{context}</p>
            </div>
            <p className="white">{description}</p>
            {link && (
                <a className="button-8" href={link} target="_blank" rel="noreferrer">
                    Listen Here
                </a>
            )}
        </div>
    );
}

import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Web App Development"
                        icon="/icons/code.svg"
                        description="I develop scalable web applications that are fast and secure."
                        />
                    <AboutCard
                        title="Mobile App Development"
                        icon="/icons/phone.svg"
                        description="I develop mobile applications with the latest technologies."
                         />
                    <AboutCard
                        title="Podcaster"
                        icon="/icons/mic.svg"
                        description="I share my thoughts and experience vocally and visually."
                         />
                    <AboutCard
                        title="Server Management"
                        icon="/icons/server.svg"
                        description="Managing AWS, Digital Ocean, Linode, and other cloud servers."
                         />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Bio</h5>
                    <h1 className="green">Hello, I&#39;m Godfred</h1>
                    <h3 className="white">I believe great things comes to those who seek great things!</h3>
                    <p className="gray">Results-driven software engineer with over 8 years of experience in programming, strategic problem-solving and digital automation. <br/><br/>
                    Experienced in building large products to achieve human needs and streamline business management.</p>
                    <br></br>
                    <a className="green" href="mailto:hello@godfredakpan.com">Let&#39;s talk!</a>
                </div>
            </div>

            <div className="justify-space">

            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
}

function AboutCard ({title, icon, description} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
        </div>
    )
}
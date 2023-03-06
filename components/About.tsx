import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    {/* <AboutCard
                        title="UX/UI Design"
                        icon="/icons/design.svg"
                        description="I create design  products with unique ideas."
                        projects={7} /> */}
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
                </div>
            </div>

            <div className="flex partners justify-space">
                <a className="col-md-12" href="https://54gene.com/"><Image src="/images/partners/54gene.svg" height={150} width={180} alt="54gene" /></a>
                <a href="https://actual.ly/"><Image src="/images/partners/actually.svg" height={150} width={180} alt="actually" /></a>
                 <a href="https://hrmaneja.com/"><Image src="/images/partners/hrmaneja.svg" height={150} width={180} alt="hrmaneja" /></a>
                 <a href="https://irunauto.com/"><Image src="/images/partners/irun.svg" height={150} width={180} alt="irun" /></a>
                 <a href="https://www.posterbot.ai/"><Image src="/images/partners/posterbot.svg" height={150} width={180} alt="posterbot" /></a>
                 <a href="https://purple.xyz/"><Image src="/images/partners/purple.svg" height={150} width={180} alt="purple" /></a>
                 <a href="https://oolio.com/"><Image src="/images/partners/tillpos.svg" height={150} width={180} alt="tillpos" /></a>
                 <a href="https://www.volibra.com/"><Image src="/images/partners/volibra.svg" height={150} width={180} alt="volibra" /></a>
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
import React from "react";
import Image, { StaticImageData } from "next/image";
import { LinkPreview } from '@dhaiwat10/react-link-preview';

export default function Activity() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
            <div className="flex-full about-text">
                    <h5 className="gray">Podcasts</h5>
                    <h1 className="green">I share knowledge and experience through my voice.</h1>
                    <h3 className="white">Listen, Learn and Contribute.</h3>
                    <p className="gray">Tune in and listen to engaging and informative conversations on a variety of topics. From current events to personal development, our podcasts offer something for everyone.</p>
                    <br></br>
                    <a className="green" href="mailto:hello@godfredakpan.com">Let&#39;s talk!</a>
                </div>
                <div className="flex-full">
                    <AboutCard
                        title="Introducing Cyber Security"
                        podcast="Dev Insights"
                        description="In this episode, our guest speaker Godfred Akpan, a Software Engineer and the CEO of iRUN Technology, shared his insights on Cyber Security..."
                        link="https://open.spotify.com/episode/4hZZp14XwnFD2QY5Jaq0KL?si=GuT4udYLRyOx0Nz74aWgkQ"
                        />
                    <AboutCard
                        title="Ask Me Anything: A Candid Conversation with a Senior Software Engineer and CEO/CTO - PART 1"
                        podcast="Dev Insights"
                        description="In this episode, we invited Godfred Akpan back to the show to discuss his experience as a Senior Software Engineer..."
                        link="https://open.spotify.com/episode/3gUINHM8Zz6qtMFqny4ofq?si=eV1SSzYbTDSDqmgRgc8K_w"
                         />
                    <AboutCard
                        title="Ask Me Anything: A Candid Conversation with a Senior Software Engineer and CEO/CTO - PART 2"
                        podcast="Dev Insights"
                        description="This episode covers the second part of the Ask Me Anything Series with Godfred Akpan..."
                        link="https://open.spotify.com/episode/4XW7KwzD5yUWjRnQ1tbPuz?si=e3YrcZEWTWWXMrJ-XOz2lQ"
                         />
                    <AboutCard
                        title="The next big thing [An introduction]"
                        podcast="The Next Big Thing"
                        description="Welcome to The Next Big Thing, the podcast that explores the groundbreaking innovations and emerging technologies that are shaping our world. In this introductory episode, we'll dive into what this podcast is all about, our goals, and what you can expect from future episodes."
                        link="https://spotifyanchor-web.app.link/e/NkgmBS6u4yb"
                         />
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
    description: string,
    link?: string,
    podcast?: string,
}

function AboutCard ({title, podcast, description, link} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h4 className="green">{title}</h4>
                <p className="white">{podcast}</p>
            </div>
            <p className="white">{description}</p>
            {link &&  
          <a className="button-8" href={link}>Listen Here</a>
        }
        </div>
    )
}
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span className="white">Copyright © {year} <Link href="/">Godfred Akpan</Link> - All rights reserved. <small className="green">Thanks to Blaiti 😎</small></span>
            <ul className="flex">
                <li>
                    <a href="https://web.facebook.com/godfred.akpan.14/" target="_blank" rel="noreferrer">
                        <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/godfred.eth" target="_blank" rel="noreferrer">
                        <Image src="/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/godfredakpan/" target="_blank" rel="noreferrer">
                        <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/godfredakpan" target="_blank" rel="noreferrer">
                        <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.polywork.com/godfred_akpan" target="_blank" rel="noreferrer">
                        <Image src="/icons/polywork.svg" width={24} height={24} alt="polywork-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Fullstack Developer  🥷</button>
                    <h1 className="white">Fast Code  💯 </h1>
                    <h1 className="white">Clean Code  💯</h1>
                    <h1 className="white">Scalable Code  💯</h1>
                    <p className="gray">I build and maintain scalable web applications</p>
                    <a className="green" href="mailto:godfredakpan@gmail.com">Let&#39;s communicate!</a>
                </div>
                <Image src="/images/godfredakpan.svg" width={463} height={513} alt="godfredakpan"  /> 
            </div>
        </header>
    )
}
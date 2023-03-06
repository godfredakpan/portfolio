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
                    <h3 className="white">Fast Code  💯 </h3>
                    <h3 className="white">Clean Code  💯</h3>
                    <h3 className="white">Scalable Code  💯</h3>
                    <p className="gray">I build and maintain scalable web applications</p>
                    <a className="green" href="mailto:godfredakpan@gmail.com">Let&#39;s talk!</a>
                </div>
                <Image src="/images/godfredakpan.svg" width={463} height={513} alt="godfredakpan"  /> 
            </div>
        </header>
    )
}
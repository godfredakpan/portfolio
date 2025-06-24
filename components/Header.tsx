import React from "react";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />

            <div className="header flex light-bg" style={{ alignItems: "center", justifyContent: "space-between", padding: "4rem 2rem", flexWrap: "wrap" }}>
                <div style={{ maxWidth: "600px" }}>
                    <button style={{ marginBottom: "1rem", background: "#1F1F1F", color: "#fff", border: "none", padding: "0.5rem 1rem", borderRadius: "6px" }}>
                        Fullstack Developer 🥷
                    </button>

                    <h1 className="white" style={{ fontSize: "2.5rem", lineHeight: "1.2", fontWeight: "bold", marginBottom: "1rem" }}>
                        I build fast, clean, and scalable code 💯
                    </h1>

                    <p className="gray" style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
                        Helping startups, teams, and founders ship production-grade products — from backend APIs to slick UIs.
                    </p>

                    <a className="green" href="mailto:godfredakpan@gmail.com" style={{ fontWeight: "bold", textDecoration: "underline" }}>
                        Let&apos;s talk
                    </a>
                </div>

                <div>
                    <Image
                        src="/images/godfredakpan.svg"
                        width={463}
                        height={513}
                        alt="Godfred Akpan"
                        priority
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </header>
    );
}

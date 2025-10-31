'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

import { Sun, Moon, SearchIcon, MenuIcon, User, X } from "lucide-react"

export default function Header() {
    const [theme, setTheme] = useState("light");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5 border-b">
            <div className="sm:container h-full max-sm:px-3 flex items-center justify-between mx-auto gap-2">
                <div className="flex items-center gap-9 flex-auto">
                    <Logo />
                    <div className="lg:flex hidden lg:justify-center flex-auto items-center gap-5 text-sm font-medium text-black dark:text-muted-foreground">
                        <Link href="/features" className="hover:text-primary transition-colors p-2">Features</Link>
                        <Link href="/install" className="hover:text-primary transition-colors p-2">Install App</Link>
                        <Link href="/" className="hover:text-primary transition-colors p-2">About Us</Link>
                    </div>
                </div>

                <div>
                    <Button
                        variant="ghost"
                        className="lg:hidden cursor-pointer dark:bg-zinc-900 bg-zinc-100"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Open menu"
                    >
                        <MenuIcon className="block" size={16} />
                    </Button>
                    <Link href="/login">
                        <Button variant="ghost" className="hidden lg:block cursor-pointer dark:bg-zinc-900 bg-zinc-100 px-auto" size="icon">
                            <User className="block mx-auto" size={16} />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute bg-background lg:hidden w-full flex flex-col justify-center gap-1 p-4 text-sm font-medium text-black dark:text-muted-foreground shadow-lg animate-in fade-in slide-in-from-top-2 z-50">
                    <Link className="p-2" href={`/features`} onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                    <Link className="p-2" href={`/install`} onClick={() => setIsMobileMenuOpen(false)}>Install App</Link>
                    <Link className="p-2" href={`/terms`} onClick={() => setIsMobileMenuOpen(false)}>Terms</Link>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="outline" className="cursor-pointer dark:bg-zinc-900 bg-zinc-100 w-full mt-2" size="icon">
                            <User className="block" size={16} />
                            <span className="ml-2">Login</span>
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    )
}

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src={`/img/logo.png`} className="w-8 h-8 rounded-full object-cover" width={400} height={400} alt="Amoke Emmanuel" />
        </Link>
    );
}
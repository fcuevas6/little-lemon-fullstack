import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"
import { AuthButton } from "./auth-button"
import { Suspense } from "react"

export default function Header() {
    return (
        <header className="flex justify-around p-4">
            <Link href="/">
                <Image 
                    src={logo} 
                    alt="Little Lemon Logo" 
                    className="max-w-[180px]"
                    />
            </Link>
            <Navigation />
            <>
                <Suspense>
                <AuthButton />
                </Suspense>
            </>
        </header>
    )
}
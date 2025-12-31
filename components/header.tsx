import Navigation from "./navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"
import { AuthButton } from "./auth-button"
import { Suspense } from "react"

export default function Header() {
    return (
        <div>
            <header className="flex justify-between py-4 px-6 lg:px-32 items-center">
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
            {/* Divider */}
            <div className="w-full p-[.5px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </div>
    )
}
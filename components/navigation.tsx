import Link from "next/link";


export default function Navigation() {
    return (
        <nav>
            <ul className="flex align-center justify-center p-4 gap-6 text-sm">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <li>About us</li>
                <li>Reservations</li>
            </ul>
        </nav>
    )
}
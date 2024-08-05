import { introCond } from "@/app/page"
import Link from "next/link"
import { Logo } from "../Logo/ui"
import { Menu } from "../ui/menu"

const Header = () => {
    return (
        <div className="border-b border-white/[0.15] flex justify-center">
            <div className="container pb-6 pt-6 flex gap-6 items-center">
                <Link href='/' className="flex items-center gap-6 text-5xl">
                    <Logo size='small' />
                    <span className={introCond.className}>triodem</span>
                </Link>
                <Menu />
            </div>
        </div>
    )
}

export {Header}
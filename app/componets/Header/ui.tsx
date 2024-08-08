import { introCond } from "@/app/page";
import Link from "next/link";
import { Logo } from "../Logo/ui";
import { Menu } from "../ui/menu";
import { NavBar } from "../NavBar/ui";

const Header = () => {
  return (
    <div className="border-b border-white/[0.15] flex justify-center">
      <div className="container pb-6 pt-6 flex gap-6 items-center px-2 sm:px-0 justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-6 md:text-5xl text-4xl"
          >
            <Logo size="small" />
            <span className={`${introCond.className} text-white`}>triodem</span>
          </Link>
          <Menu />
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export { Header };

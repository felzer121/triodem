"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="p-2 hover:bg-white/[0.15] transition duration-200 rounded-md cursor-pointer flex lg:hidden"
        onClick={handleClick}
      >
        {!isOpen ? <IconMenu stroke={2} /> : <IconX />}
      </div>
      <div
        className="absolute right-0 top-[96px] h-[calc(100vh-96px)] w-full bg-[#040404] z-30 transition-all duration-300 ease-out"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <nav className="list-none p-3 text-[#696969]">
          <li>
            <Link
              href="/"
              className={`transition  ${
                pathname === "/"
                  ? "text-[#fff] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]"
                  : ""
              }`}
            >
              <p className="p-3">Главная</p>
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`transition ${
                pathname === "/products"
                  ? "text-[#fff] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]"
                  : ""
              }`}
            >
              <p className="p-3">Продукты</p>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`transition ${
                pathname === "/services"
                  ? "text-[#fff] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]"
                  : ""
              }`}
            >
              <p className="p-3">Услуги</p>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`transition ${
                pathname === "/about"
                  ? "text-[#fff] drop-shadow-[4px_4px_4px_rgba(34,61,50,0.65)]"
                  : ""
              }`}
            >
              <p className="p-3">О компании</p>
            </Link>
          </li>
        </nav>
      </div>
    </>
  );
};

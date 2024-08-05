import Link from "next/link";
import { FonProducts } from "../svg/FonProducts";
import { IconArrowBigDownFilled } from "@tabler/icons-react";

export const ProductsHeader = () => {
  return (
    <div className="flex justify-center h-screen w-full bg-black bg-grid-small-white/[0.3] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container pb-10 pt-16 relative">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-24">
            <h1 className="text-6xl font-extrabold max-w-screen-sm text-[#fff]">
              Познакомьтесь с реализованными веб-проектами
            </h1>
            <div className="grid grid-cols-[48px_1fr] gap-12 justify-between">
              <Link
                href="#products"
                className="p-2 rounded-full w-12 h-12 flex justify-center items-center bg-[#262626] transition hover:bg-[#191919] hover:text-white text-zinc-400"
              >
                <IconArrowBigDownFilled />
              </Link>
              <p className="max-w-[570px] text-2xl text-zinc-400">
                Мы разрабатываем красивые и удобные в использовании цифровые
                продукты, которые помогают решать бизнес-задачи в разных сферах.
              </p>
            </div>
          </div>
          <FonProducts />
        </div>
      </div>
    </div>
  );
};

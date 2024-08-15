import Link from "next/link";
import { FonProducts } from "../svg/FonProducts";
import { IconArrowBigDownFilled } from "@tabler/icons-react";

export const ProductsHeader = () => {
  return (
    <div className="flex justify-center h-screen w-full bg-black bg-grid-small-white/[0.3] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container pb-10 pt-12 relative px-3">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex flex-col gap-12 max-[400px]:gap-6  md:gap-24 w-full order-2 lg:order-1">
            <h1 className="text-4xl max-[375px]:text-3xl md:text-6xl font-extrabold max-w-screen-sm text-white">
              Познакомьтесь с<br /> реализованными
              <br /> веб-проектами
            </h1>
            <div className="grid grid-cols-[48px_1fr] max-[450px]:grid-cols-[1fr] gap-6 md:gap-12 justify-between">
              <Link
                href="#products"
                className="p-2 rounded-full w-12 h-12 flex justify-center items-center bg-[#262626] transition hover:bg-[#191919] hover:text-white text-zinc-400 m-auto order-1 max-[450px]:order-2"
              >
                <IconArrowBigDownFilled />
              </Link>
              <p className="text-xl md:text-2xl max-w-[610px] text-zinc-400 order-2 max-[450px]:order-1 max-[400px]:text-base">
                Мы разрабатываем красивые и удобные в использовании цифровые
                продукты, которые помогают решать бизнес-задачи в разных сферах.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center order-1 lg:order-2 lg:justify-start h-[300px] max-[450px]:h-[260px] sm:h-[340px]">
            <FonProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

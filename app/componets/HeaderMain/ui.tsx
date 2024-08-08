import { Screen } from "../Illustration/Screen";
import { introCond } from "@/app/page";
import { CanvasEffect } from "../CanvasEffect/ui";
import { Header } from "../Header/ui";
import Link from "next/link";

const HeaderMain = () => {
  return (
    <div className="w-full bg-black bg-grid-small-white/[0.3] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full sm:min-h-screen lg:h-screen flex flex-col relative z-20">
        <Header />
        <div className="flex justify-center h-full items-center sm:py-14 pt-12 pb-24">
          <div className="container">
            <div className="flex items-center flex-col lg:flex-row lg:gap-2 gap-12">
              <div className="flex justify-center w-full order-2 lg:order-1">
                <div className="flex flex-col gap-6 px-3">
                  <h2 className="lg:text-5xl text-4xl max-w-96">
                    <span className={`${introCond.className} text-white`}>
                      Выйдите на<br /> новый уровень.
                    </span>
                  </h2>
                  <p className="text-zinc-500 max-w-xl sm:text-base text-sm">
                    Triodem — интернет-агентство полного цикла.
                    <span className="text-sky-50 font-semibold">
                      {" "}
                      Разрабатываем и сопровождаем{" "}
                    </span>
                    технологически сложные веб-проекты и мобильные приложения,
                    создаем и реализуем digital-стратегии, проводим комплексные
                    рекламные компании.
                  </p>
                  <div className="flex gap-3 flex-col">
                    <div className="flex gap-3 sm:gap-6 max-w-sm">
                      <Link
                        href={"/services"}
                        className="px-3 sm:px-4 py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                      >
                        Заполнить Бриф
                      </Link>
                      <Link
                        href={"#aboutDevelopment"}
                        className="shadow-[0_0_0_3px_#0A0A0A_inset] px-4 sm:px-6 py-3 bg-zinc-950 border border-zinc-800 text-white text-sm sm:text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                      >
                        Узнать Больше
                      </Link>
                    </div>
                    <div className="flex gap-6 justify-center max-w-sm">
                      <span className="text-zinc-800 font-semibold hidden lg:block">
                        ▲ ~ npx start-project@latests
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center order-1 lg:order-2">
                <div className="relative w-full">
                  <Screen styles={"xl:max-w-fit lg:max-w-[550px]"} />
                  <div className="absolute w-full max-[420px]:left-[16px] max-[420px]:max-w-[calc(calc(100%-36px))] max-[420px]:top-[26px] max-[420px]:h-[calc(100%-48px)] top-[34px] sm:top-12 xl:top-10 lg:top-8 left-[20px] sm:left-6 h-[calc(100%-58px)] max-w-[calc(calc(100%-46px))] sm:h-[calc(100%-80px)] sm:max-w-[calc(calc(100%-58px))] lg:h-[calc(100%-60px)] lg:max-w-[calc(calc(100%-52px))] xl:h-[calc(100%-72px)] xl:max-w-[calc(calc(100%-57px))]">
                    <CanvasEffect />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;

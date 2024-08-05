
import { Screen } from "../Illustration/Screen"
import { introCond } from "@/app/page"
import { CanvasEffect } from "../CanvasEffect/ui"
import { Header } from "../Header/ui"
import Link from "next/link"


const HeaderMain = () => {
  return (
    <div className="h-screen w-full bg-black bg-grid-small-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full h-screen flex flex-col relative z-20">
            <Header />
            <div className="flex justify-center h-full items-center">
              <div className="container">
                <div className="columns-2 flex items-center">
                  <div className="flex flex-col gap-6 w-full">
                      <h2 className="text-5xl max-w-96"><span className={`${introCond.className} text-white`}>Выйдите на новый уровень.</span></h2>
                      <p className="text-zinc-500 max-w-xl">Triodem — интернет-агентство полного цикла. 
                          <span className="text-sky-50 font-semibold"> Разрабатываем и сопровождаем </span> 
                          технологически сложные веб-проекты и мобильные приложения, создаем и реализуем digital-стратегии, проводим комплексные рекламные компании. 
                      </p>
                      <div className="flex gap-3 flex-col">
                        <div className="flex gap-6 max-w-sm">
                          <Link href={'/services'} className="px-4 py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                            Заполнить Бриф
                          </Link>
                          <Link href={'#aboutDevelopment'} className="shadow-[0_0_0_3px_#0A0A0A_inset] px-6 py-3 bg-zinc-950 border border-zinc-800 text-white text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400">
                            Узнать Больше
                          </Link>
                        </div>
                        <div className="flex gap-6 justify-center max-w-sm">
                          <span className="text-zinc-800 font-semibold">▲ ~ npx start-project@latests</span>
                        </div>
                      </div>
                  </div>
                  <div className="w-full flex justify-center">
                      <div className="relative">
                        <Screen />
                        <div className="absolute w-full top-10 left-6 max-w-[660px]">
                          <CanvasEffect />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain 
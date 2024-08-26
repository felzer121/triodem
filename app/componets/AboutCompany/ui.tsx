import { Logo } from "../Logo/ui"

export const AboutCompany = () => {
  const today = new Date()
  
  return (
    <section className="flex justify-center py-20" id="aboutCompany">
      <div className="container pb-6 pt-12 grid gap-y-12 sm:gap-y-24 xl:gap-2 grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] px-3">
        <div className="flex flex-col justify-between gap-3 col-span-1 md:col-span-2 xl:col-span-1">
          <Logo size="large" />
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl max-[425px]:text-2xl font-black text-white">Мы стремимся улучшать качество жизни людей</h2>
            <p className="text-2xl md:text-2xl lg:text-3xl font-extralight text-[#888]">разрабатывая полезные и удобные цифровые сервисы.</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white">20-40%</span>
            <span className="text-[#888] text-xl ms:text-2xl uppercase">ROI (возврат инвестиций)</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-full border border-[#515151] w-[340px] h-[340px] max-[375px]:w-[290px] max-[375px]:h-[290px]">
            <span className="text-7xl sm:text-8xl font-extralight text-white">{today.getFullYear() - 2016}+</span>
            <span className="text-xl sm:text-2xl font-normal text-[#888] uppercase">Лет на рынке</span>
          </div>
        </div>
        <div className="flex flex-col m-auto">
          <div className="flex flex-col justify-center items-center rounded-full border border-[#515151] w-[376px] h-[376px] max-[375px]:w-[290px] max-[375px]:h-[290px]">
            <span className="text-7xl sm:text-8xl font-extralight text-white">100+</span>
            <span className="text-xl sm:text-2xl font-normal text-[#888] uppercase">реализованных<br /> проектов</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold text-white">12</span>
            <span className="text-[#888] text-xl ms:text-2xl uppercase">Человек в команде</span>
          </div>
        </div>
      </div>
    </section>
  )
}
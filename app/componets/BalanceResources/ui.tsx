import { BalanceSchedule } from "../svg/BalanceSchedule";

export const BalanceResources = () => {
  return (
    <section className="flex justify-center w-full bg-black bg-grid-small-white/[0.3] relative" id="balance">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container pb-10 pt-16 relative">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center gap-6 mb-12">
            <h1 className="text-5xl font-extrabold max-w-screen-sm text-white">
              Баланс
              <br /> в распределение грейдов
            </h1>
            <p className="max-w-lg text-lg text-zinc-500">
              Мы внедрили эффективное распределение грейдов в команде. Эта
              модель уменьшает риски в процессе разработки и способствует
              профессиональному росту специалистов на проектах.
            </p>
          </div>
          <BalanceSchedule />
        </div>
      </div>
    </section>
  );
};

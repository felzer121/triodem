import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { Screen } from "../Illustration/Screen";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Link from "next/link";
import { BessarabTabs } from "../ui/bessarabTabs";

export default function Products() {
  const tabs = [
    {
      title: "Продукт",
      value: "product",
      content: (
        <div
          className="w-full flex items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <div className="flex gap-4 justify-between items-center">
            <div className="flex flex-col gap-4 max-w-[50%]">
              <div className="flex gap-4">
                <span className="uppercase text-base">#Разработка</span>
                <span className="uppercase text-base">#Дизайн</span>
              </div>
              <h3 className="text-5xl font-bold mb-4">О продукте</h3>
              <p className="text-lg font-normal">
                Торговая марка GERMAN BESSARAB, ориентирована на салоны красоты
                бизнес и премиум-сегмента. Приобрести косметику можно напрямую
                через сайт, либо в салонах - представителях вашего города. Бренд
                имеет закрытую политику, что позволяет наладить доверительный
                контакт, напрямую между мастером и клиентом, без посредников в
                виде маркетплейсов, что исключает вероятность подделки товара.
              </p>
              <p className="text-lg font-normal">
                Поэтому разработку сайта мы начали с углублённого исследования
                ниши, чтобы детальнее погрузится в направление, так как ниша
                молодая и узконаправленная.
              </p>
              <div className="flex gap-3 sm:gap-6 max-w-sm mt-2">
                <Link
                  href={"https://germanbessarab.com/"}
                  target="_blank"
                  className="px-3 sm:px-4 py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                >
                  Сайт
                </Link>
                <button className="flex gap-4 shadow-[0_0_0_3px_#0A0A0A_inset] px-4 sm:px-6 py-3 bg-zinc-950 text-white text-sm sm:text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400">
                  Разработка
                  <IconArrowNarrowRight />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative w-full">
                <div className="w-full h-full top-10 left-6 max-w-[660px]">
                  <Image
                    className="rounded-xl"
                    src={"/image/project-bessarab-1.jpg"}
                    width={0}
                    quality={100}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt={"main"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  const tabs1 = [
    {
      title: "Продукт",
      value: "product1",
      content: (
        <div
          className="w-full flex items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <div className="flex gap-4 justify-between items-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <Screen />
                <div className="absolute w-full h-full top-10 left-6 max-w-[660px]">
                  <Image
                    className="rounded-xl"
                    src={"/image/project-bessarab-1.jpg"}
                    width={0}
                    quality={100}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "calc(100% - 72px)",
                    }}
                    alt={"main"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl font-bold mb-4">О продукте</h3>
              <p className="text-xl font-normal">
                Планируйте рабочую загрузку каждого сотрудника. Простое
                управление позволит распределить часы и отметить их
                необходимость на проекте за несколько кликов.
              </p>
              <p className="text-xl font-normal">
                Планируйте рабочую загрузку каждого сотрудника. Простое
                управление позволит распределить часы и отметить их
                необходимость на проекте за несколько кликов.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services1",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center mb-40 px-3">
      <div className="container h-[74rem] lg:h-[50rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-30 mb-40">
        <h3
          className="text-3xl sm:text-5xl font-extrabold pb-6 py-10 text-[#fff]"
          id="products"
        >
          Интернет магазин
          <br /> косметики Bessarab
        </h3>
        <BessarabTabs />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return 123123;
};

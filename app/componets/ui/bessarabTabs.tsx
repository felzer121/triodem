"use client";
import { cn } from "@/app/lib/utils";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconArtboardFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AspIcon } from "../svg/AspIcon";
import { GrandNodeIcon } from "../svg/GrandNodeIcon";
import { MuiIcon } from "../svg/MuiIcon";
import { NextIcon } from "../svg/NextIcon";
import { NopCoomerceIcon } from "../svg/NopCoomerceIcon";
import { TsIcon } from "../svg/TsIcon";
import { ViteIcon } from "../svg/ViteIcon";
import { ZustandIcon } from "../svg/ZustandIcon";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const BessarabTabs = ({
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const tabsBessarab = [
    {
      title: "Продукт",
      value: "product",
      content: (
        <div
          className="w-full flex justify-between items-center overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 justify-between items-center">
            <div className="flex flex-col gap-2 sm:gap-4 max-w-[100%] lg:max-w-[50%] order-2 lg:order-1">
              <div className="flex gap-4">
                <span className="uppercase text-base">#Разработка</span>
                <span className="uppercase text-base">#Дизайн</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold mb-4">
                О продукте
              </h3>
              <p className="max-[450px]:text-sm text-base xl:text-lg font-normal">
                Торговая марка GERMAN BESSARAB, ориентирована на салоны красоты
                бизнес и премиум-сегмента. Приобрести косметику можно напрямую
                через сайт, либо в салонах - представителях вашего города. Бренд
                имеет закрытую политику, что позволяет наладить доверительный
                контакт, напрямую между мастером и клиентом, без посредников в
                виде маркетплейсов, что исключает вероятность подделки товара.
              </p>
              <p className="max-[450px]:text-sm text-base xl:text-lg font-normal">
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
                <button
                  onClick={() => {
                    moveSelectedTabToTop(1);
                  }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="flex gap-4 max-[400px]:gap-2 shadow-[0_0_0_3px_#0A0A0A_inset] px-4 max-[400px]:[px-2] sm:px-6 py-3 max-[400px]:[py-2] bg-zinc-950 text-white text-sm sm:text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                >
                  Дизайн
                  <IconArrowNarrowRight className="max-[400px]:w-5" />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center  order-1 lg:order-2">
              <div className="relative w-full flex justify-end">
                <div className="w-full h-full top-10 left-6 max-w-[100%] lg:max-w-[660px]">
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
      title: "Дизайн",
      value: "design",
      content: (
        <div
          className="w-full flex flex-col justify-center lg:flex-row gap-6 lg:gap-6 items-center overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <div className="w-full flex gap-4 md:gap-6 lg:gap-0 flex-row lg:flex-col items-center justify-center">
            <Image
              className="rounded-xl p-0 lg:p-6 max-w-[440px] lg:max-w-[100%]"
              src={"/image/bessarabMobile.png"}
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
          <div className="flex gap-4 justify-between items-center max-w-[100%] lg:max-w-[70%]">
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="flex gap-4">
                <span className="uppercase text-base">#Разработка</span>
                <span className="uppercase text-base">#Дизайн</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold mb-4">Дизайн</h3>
              <h5 className="text-lg font-medium flex gap-2 items-center">
                <IconArtboardFilled /> Общая концепция:
              </h5>
              <p className="text-base max-[450px]:text-sm xl:text-lg font-light text-neutral-400">
                Дизайн интернет-магазина косметики выполнен в элегантной
                черно-белой цветовой палитре. Такой подход обеспечивает стильный
                и современный вид, который подчеркивает продукты и создает
                атмосферу роскоши.
              </p>
              <h5 className="text-lg font-medium flex gap-2 items-center">
                <IconArtboardFilled /> Стиль и эстетика:
              </h5>
              <p className="text-base max-[450px]:text-sm xl:text-lg font-light text-neutral-400">
                <span className="text-base font-medium text-white">Минимализм:</span> простота форм и отсутствие лишних
                элементов делают акцент на товарах, что способствует легкому
                восприятию информации.
              </p>
              <p className="text-base max-[450px]:text-sm xl:text-lg font-light text-neutral-400">
                <span className="text-base font-medium text-white">Контраст:</span> чёрные и белые цвета создают яркий
                контраст, который выделяет ключевые элементы интерфейса.
              </p>
              <div className="flex gap-3 sm:gap-6 max-w-sm mt-2">
                <button
                  onClick={() => {
                    moveSelectedTabToTop(0);
                  }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="flex items-center gap-4 max-[400px]:gap-1 shadow-[0_0_0_3px_#0A0A0A_inset] px-4 max-[400px]:[px-2] sm:px-6 py-3 max-[400px]:[py-2] bg-zinc-950 text-white text-sm sm:text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                >
                  <IconArrowNarrowLeft className="max-[400px]:w-5" />
                  Продукт
                </button>
                <button
                  onClick={() => {
                    moveSelectedTabToTop(2);
                  }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="flex items-center gap-4 max-[400px]:gap-1 shadow-[0_0_0_3px_#0A0A0A_inset] px-4 max-[400px]:[px-2] sm:px-6 py-3 max-[400px]:[py-2] bg-zinc-950 text-white text-sm sm:text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                >
                  Технологии
                  <IconArrowNarrowRight className="max-[400px]:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Технологии",
      value: "services",
      content: (
        <div
          className="w-full flex flex-col justify-center lg:flex-row gap-20 lg:gap-6 items-center overflow-hidden relative h-full rounded-2xl p-4 sm:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)",
          }}
        >
          <div className="w-full flex gap-4 md:gap-12 lg:gap-0 flex-col items-center sm:flex-row lg:flex-col">
            <div className="w-[340px] max-[400px]:w-full p-0 lg:p-[28px]">
              <p className="text-lg">Цель:</p>
              <p className="text-zinc-300 text-sm font-normal">
                Разработать E-commerce проект по торговле премиальной косметикой
                в строгом 2 цветном дизайне и вывести его на рынок
              </p>
            </div>
            <div className="rounded-lg w-[340px] max-[400px]:w-full p-0 lg:p-[28px]">
              <p className="text-lg">Стек:</p>
              <div className="grid grid-cols-[1fr_1fr] gap-6 max-w-[290px] sm:max-w-full" id="gridList">
                <div className="flex justify-start items-center max-[400px]:max-w-[110px] px-2">
                  <NextIcon />
                </div>
                <div className="grid grid-cols-2 gap-2 relative">
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-w-[42px] h-[42px]">
                    <ZustandIcon />
                  </div>
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-w-[42px] h-[42px]">
                    <ViteIcon />
                  </div>
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-w-[42px] h-[42px]">
                    <MuiIcon />
                  </div>
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-w-[42px] h-[42px]">
                    <TsIcon />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 relative mt-2">
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-[400px]:max-w-[32px] max-[400px]:h-[32px] max-w-[42px] h-[42px]">
                    <GrandNodeIcon styles="max-[400px]:w-[18px] max-[400px]:h-[18px]" />
                  </div>
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-[400px]:max-w-[32px] max-[400px]:h-[32px] max-w-[42px] h-[42px]">
                    <AspIcon styles="max-[400px]:w-[18px] max-[400px]:h-[18px]" />
                  </div>
                  <div className="flex justify-center items-center bg-white/[0.1] rounded-full max-[400px]:max-w-[32px] max-[400px]:h-[32px] max-w-[42px] h-[42px]">
                    <NopCoomerceIcon styles="max-[400px]:w-[18px] max-[400px]:h-[18px]" />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-3xl">.NET</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-between items-center max-w-[100%] lg:max-w-[70%]">
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="flex gap-4">
                <span className="uppercase text-base">#Разработка</span>
                <span className="uppercase text-base">#Дизайн</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold mb-4">
                Технологии
              </h3>
              <p className="text-base max-[450px]:text-sm xl:text-lg font-normal">
                Для разработки фронтенда интернет-магазина была выбрана Next.js,
                так как он обеспечивает быструю индексацию и загрузку страниц
                благодаря серверному рендерингу (SSR) и кэшированию. Это
                значительно ускоряет работу сайта. Кроме того, использование
                системы управления состоянием позволило создать гибкую систему
                фильтров и сортировки, что упрощает поиск нужных товаров.
              </p>
              <p className="text-base max-[450px]:text-sm xl:text-lg font-normal">
                Для создания бэкенда интернет-магазина была выбрана платформа
                .NET в сочетании с PostgreSQL. Это решение гарантирует высокую
                производительность и надежность, что особенно важно для
                обработки значительных объемов данных и транзакций.
              </p>
              <div className="flex gap-3 sm:gap-6 max-w-sm mt-2">
                <button
                  onClick={() => {
                    moveSelectedTabToTop(1);
                  }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="flex items-center gap-4 max-[400px]:gap-1 shadow-[0_0_0_3px_#0A0A0A_inset] px-4 max-[400px]:[px-2] sm:px-6 py-3 max-[400px]:[py-2] bg-zinc-950 text-white text-sm sm:text-base rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400"
                >
                  <IconArrowNarrowLeft className="max-[400px]:w-5" />
                  Дизайн
                </button>
                <Link
                  href={"https://germanbessarab.com/"}
                  target="_blank"
                  className="px-3 sm:px-4 py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
                >
                  Сайт
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [active, setActive] = useState<Tab>(tabsBessarab[0]);
  const [tabs, setTabs] = useState<Tab[]>(tabsBessarab);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabsBessarab];
    setHovering(false);
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {tabsBessarab.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative uppercase px-4 py-2 rounded-full",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-white">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-12", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

const DummyContent = () => {
  return 123123;
};

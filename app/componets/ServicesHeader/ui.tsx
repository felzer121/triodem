import Link from "next/link";
import { FonServices } from "../svg/FonServices";
import { IconArrowBigDownFilled } from "@tabler/icons-react";

export const ServicesHeader = () => {
  return (
    <div className="flex justify-center h-full w-full">
      <div className="container pb-10 pt-16 relative">
        <div className="flex h-5/6 items-center">
          <div className="flex flex-col gap-24 w-full">
            <h1 className="text-6xl font-extrabold max-w-screen-sm text-white">
              Разрабатываем виртуальные решения
            </h1>
            <div className="grid grid-cols-[48px_1fr] gap-12 justify-between">
              <Link
                href="#aboutCompany"
                className="p-2 rounded-full w-12 h-12 flex justify-center items-center bg-[#262626] transition hover:bg-[#191919] hover:text-white text-zinc-400"
              >
                <IconArrowBigDownFilled />
              </Link>
              <p className="max-w-[610px] text-2xl text-zinc-400">
                Принимаем вызов работы над сложными сервисами и формируем команды разработки для выполнения задач самых взыскательных клиентов.
              </p>
            </div>
          </div>
          <div className="w-full">

          <FonServices />
          </div>
        </div>
      </div>
    </div>
  );
};

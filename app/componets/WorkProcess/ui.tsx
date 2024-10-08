import { IntegrationPO } from "../svg/IntegrationPO";
import { IconInfoSquareRoundedFilled } from "@tabler/icons-react";
import { Tooltip } from "../ui/tooltip";
import { OrderFon } from "../svg/OrderFon";
import { ProectionPO } from "../svg/ProectionPO";

export const WorkProcess = () => {
  return (
    <section className="flex justify-center mt-24 mb-12 px-3">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
          <div className="overflow-hidden self-center hidden xl:block">
            <OrderFon />
          </div>
          <div className="flex flex-col gap-4 border rounded-lg border-white/[0.15] py-8 px-10 max-[440px]:px-4 max-[440px]:py-4">
            <div className="flex h-[250px] justify-center rounded-lg w-full bg-white/[0.05] py-8">
              <ProectionPO />
            </div>
            <h4 className="text-[20px] md:text-[26px] font-bold leading-8 text-white">
              Проектирование, разработка и внедрение ПО
            </h4>
            <p className="text-sm font-normal text-zinc-500">
              Мы предлагаем полный цикл услуг по созданию программного
              обеспечения, включающий:
            </p>
            <ul className="text-zinc-500 flex flex-wrap gap-3">
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2 relative">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-32",
                      name: "Анализ требований",
                      designation:
                        "Совместно с вами мы определяем цели и задачи проекта, собираем требования для достижения необходимых бизнес-результатов.",
                    },
                  ]}
                />
              </li>
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-32",
                      name: "Проектирование",
                      designation:
                        "Разрабатываем архитектуру системы и интерфейс пользователя, чтобы обеспечить удобство и эффективность использования.",
                    },
                  ]}
                />
              </li>
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-32",
                      name: "Разработка",
                      designation:
                        "Наша команда программистов реализует проект, создавая высококачественный код и интегрируя все необходимые функции.",
                    },
                  ]}
                />
              </li>
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-32",
                      name: "Тестирование",
                      designation:
                        "Перед запуском программного обеспечения мы проводим тщательное тестирование, чтобы убедиться в его надежности и исправности.",
                    },
                  ]}
                />
              </li>
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-32",
                      name: "Внедрение",
                      designation:
                        "Мы помогаем вам в использовании нового ПО, обеспечивая быстрое и эффективное внедрение, а также обучая ваших сотрудников.",
                    },
                  ]}
                />
              </li>
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-36",
                      name: "Поддержка и обновление",
                      designation:
                        "После запуска мы продолжаем поддерживать программное обеспечение, исправляя ошибки и добавляя новые функции в соответствии с вашими пожеланиями.",
                    },
                  ]}
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 border rounded-lg border-white/[0.15] py-8 px-10 max-[440px]:px-4 max-[440px]:py-4">
            <div className="flex justify-center h-[250px] rounded-lg w-full bg-white/[0.05] py-8">
              <IntegrationPO />
            </div>
            <h4 className="text-[20px] md:text-[26px] font-bold leading-8 text-white">
              Интеграция решений в разработанное ПО
            </h4>
            <p className="text-sm font-normal text-zinc-500">
              Мы предлагаем услуги по интеграции решений в уже разработанное
              программное обеспечения:
            </p>
            <ul className="text-zinc-500 flex flex-col gap-3">
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2 relative">
                <Tooltip
                  items={[
                    {
                      id: 1,
                      top: "-top-28",
                      name: "Анализ текущей системы",
                      designation:
                        "Мы оцениваем ваше существующее ПО, чтобы понять его архитектуру и возможности для интеграции.",
                    },
                  ]}
                />
              </li>
              <li className=" rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 2,
                      top: "-top-32",
                      name: "Выбор подходящих решений",
                      designation:
                        "В зависимости от ваших потребностей, мы подбираем оптимальные решения и инструменты, которые улучшат функциональность вашего ПО.",
                    },
                  ]}
                />
              </li>
              <li className="rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 3,
                      top: "-top-32",
                      name: "Разработка интеграционных решений",
                      designation:
                        "Наша команда разрабатывает и настраивает мосты и интерфейсы для связывания различных систем, обеспечивая их бесшовное взаимодействие.",
                    },
                  ]}
                />
              </li>
              <li className="rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 4,
                      top: "-top-32",
                      name: "Тестирование интеграции",
                      designation:
                        "Проводим комплексное тестирование, чтобы гарантировать, что интеграция работает корректно и не вызывает проблем в существующей системе.",
                    },
                  ]}
                />
              </li>
              <li className="rounded bg-white/[0.15] w-fit flex gap-2">
                <Tooltip
                  items={[
                    {
                      id: 5,
                      top: "-top-32",
                      name: "Внедрение и обучение",
                      designation:
                        " Помогаем в внедрении интегрированных решений и обучаем ваших сотрудников использованию новых функций.",
                    },
                  ]}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

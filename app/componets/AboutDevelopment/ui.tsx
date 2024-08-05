import { introCond } from "@/app/page";
import { HoverEffect } from "../ui/card-hover-effect";
import {
  IconTableColumn,
  IconTerminal2,
  IconDeviceIpadCode,
} from "@tabler/icons-react";

export const AboutDevelopment = () => {
  return (
    <section
      id="aboutDevelopment"
      className="flex justify-center border-b border-white/[0.2]"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #101010 100%)",
      }}
    >
      <div className="container">
        <div className="flex gap-1 flex-col items-center mt-4 mb-6">
          <h5 className="text-zinc-500">
            [ разработка и сопровождение вашего веб проекта ]
          </h5>
          <h2 className="text-4xl">
            <span className={introCond.className}>
              Этапы разработки приложения
            </span>
          </h2>
        </div>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export const projects = [
  {
    icon: <IconTableColumn color="#66ACAA" />,
    title: "ДИЗАЙН",
    description:
      "Мы объединяем привлекательный веб-дизайн с изящной функциональностью. Каждый элемент дизайна - от макета до визуальных эффектов - выстраивается так, чтобы зритель прочувствовал не просто внешний вид, а историю и идеалы вашего проекта. Мы верим в то, что это искусство соединять красоту и функциональность, чтобы создать нечто, что говорит не только глазам, но и сердцу.",
    id: 1,
  },
  {
    icon: <IconDeviceIpadCode color="#66ACAA" />,
    title: "РАЗРАБОТКА",
    description:
      "Затем мы вплетаем эти картины в живую, дышащую сущность через программиро-вание, создавая интуитивно-понятный пользовательский опыт и визуальную гармонию. Для нас важно не только создать что-то красивое, но и функциональное. Мы стремимся к тому, чтобы каждая строка кода, каждый пиксель и каждая анимация были взаимосвязаны.",
    id: 2,
  },
  {
    icon: <IconTerminal2 color="#66ACAA" />,
    title: "УПРАВЛЕНИЕ САЙТОМ",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    id: 3,
  },
  {
    title: (
      <>
        Деплой и<br /> развертывание проекта
      </>
    ),
    id: 4,
  },
  {
    title: <>Техническое сопровождение</>,
    id: 5,
  },
  {
    title: (
      <>
        Аналитика и<br /> оптимизация
      </>
    ),
    id: 6,
  },
];

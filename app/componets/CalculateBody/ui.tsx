import { IconShoppingBag, IconArrowNarrowRight } from "@tabler/icons-react";
const questions = [
  [
    {
      id: 1,
      icon: <IconShoppingBag />,
      price: "80 000р",
      title: "Интернет магазин",
      description:
        "E-commerce веб-платформа, где пользователи могут покупать товары или услуги через интернет.",
    },
    {
      id: 2,
      icon: <IconShoppingBag />,
      price: "80 000р",
      title: "Корпоративный сайт",
      description:
        "E-commerce веб-платформа, где пользователи могут покупать товары или услуги через интернет.",
    },
    {
      id: 3,
      icon: <IconShoppingBag />,
      price: "80 000р",
      title: "Web приложение",
      description:
        "E-commerce веб-платформа, где пользователи могут покупать товары или услуги через интернет.",
    },
    {
      id: 4,
      icon: <IconShoppingBag />,
      price: "120 000р",
      title: "Мобильное приложение",
      description:
        "E-commerce веб-платформа, где пользователи могут покупать товары или услуги через интернет.",
    },
  ],
  [
    {
      id: 1,
      icon: <IconShoppingBag />,
      price: "80 000р",
      title: "Фирменный стиль",
      description:
        "E-commerce веб-платформа, где пользователи могут покупать товары или услуги через интернет.",
    },
    {
      id: 2,
      icon: <IconShoppingBag />,
      price: "80 000р",
      title: "Фирменный стиль",
      description:
        "E-commerce веб-платформа, где пользователи могут покупать товары или услуги через интернет.",
    },
  ],
];

interface CalculateBodyProps {
  step: number;
  setStep: (step: number) => void
}

export const CalculateBody = ({ step, setStep }: CalculateBodyProps) => {
  return (
    <div className="min-h-[400px] flex flex-col gap-5">
      {questions[step - 1]?.map((question) => (
        <div key={question.id} className="bg-[#161B19] hover:bg-[#24302B] transition duration-300 rounded-lg p-5 flex flex-col gap-4 cursor-pointer" onClick={() => setStep(step + 1)}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="bg-[#212D27] rounded-md p-2 w-fit text-[#48BF85]">{question.icon}</div>
              <h4 className="text-2xl text-white">{question.title}</h4>
            </div>
            <div className="flex items-center gap-6"> 
              <span className="text-lg text-[#888] font-norma">{question.price}</span>
              <IconArrowNarrowRight className="text-white" />
            </div>
          </div>
          <p className="text-base text-[#888]">{question.description}</p>
        </div>
      ))}
    </div>
  );
};

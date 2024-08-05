import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { Screen } from "../Illustration/Screen";




export default function Products() {
  const tabs = [
    {
      title: "Продукт",
      value: "product",
      content: (
        <div className="w-full flex items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
          <div className="flex gap-4 justify-between items-center">
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
          </div>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
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
        <div className="w-full flex items-center overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br" style={{background: 'linear-gradient(93.28deg, #13211C -6.06%, #224033 97.31%)'}}>
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];


  return (
    <div className="flex flex-col justify-center mb-40">
      <div className="container h-[40rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-30 mb-40">
        <h3 className="text-5xl font-extrabold pb-6 py-10 text-[#fff]" id="products">
          Интернет магазин
          <br /> косметики Bessarab
        </h3>
        <Tabs tabs={tabs} />
      </div>
      <div className="container h-[40rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col mx-auto w-full  items-start justify-start my-30">
        <h3 className="text-5xl font-extrabold pb-6 py-10 text-[#fff]" id="products">
          Mob app Штраф.онлайн
        </h3>
        <Tabs tabs={tabs1} />
      </div>
    </div>
  );
}


const DummyContent = () => {
  return 123123;
};

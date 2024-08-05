import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { AboutDevelopment } from "./componets/AboutDevelopment/ui";
import { Technologies } from "./componets/Technologies/ui";
import { ProjectsPreview } from "./componets/ProjectsPreview/ui";
import { Footer } from "./componets/Footer/ui";
import HeaderMain from "./componets/HeaderMain/ui";

export const introCond = localFont({
  src: "./assets/fonts/Intro_Cond.ttf",
  weight: "800",
});

export default function Home() {
  return (
    <main className={GeistSans.className}>
      <HeaderMain />
      <AboutDevelopment />
      <Technologies />
      <ProjectsPreview />
      <Footer />
    </main>
  );
}

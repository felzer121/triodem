import { GeistSans } from "geist/font/sans";
import { Header } from "../componets/Header/ui";
import { ServicesHeader } from "../componets/ServicesHeader/ui";
import { Footer } from "../componets/Footer/ui";
import { BalanceResources } from "../componets/BalanceResources/ui";
import { ProjectsPreview } from "../componets/ProjectsPreview/ui";
import { WorkProcess } from "../componets/WorkProcess/ui";
import { Calculate } from "../componets/Calculate/ui";

export default function Services() {
  return (
    <div className={GeistSans.className}>
      <header className="sm:min-h-screen lg:h-screen">
        <Header />
        <Calculate />
      </header>
      <main>
        <BalanceResources />
        <WorkProcess />
        <ProjectsPreview />
      </main>
      <Footer />
    </div>
  );
}

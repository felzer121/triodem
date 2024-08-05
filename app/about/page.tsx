import { GeistSans } from "geist/font/sans";
import { Header } from "../componets/Header/ui";
import { Footer } from "../componets/Footer/ui";
import { ServicesHeader } from "../componets/ServicesHeader/ui";
import { AboutCompany } from "../componets/AboutCompany/ui";
import { ProjectsPreview } from "../componets/ProjectsPreview/ui";

export default function Products() {
  return (
    <div className={GeistSans.className}>
      <header className="h-screen">
        <Header />
        <ServicesHeader />
      </header>
      <main>
        <AboutCompany />
        <ProjectsPreview />
      </main>
      <Footer />
    </div>
  )
}
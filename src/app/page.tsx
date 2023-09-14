import styles from "./page.module.css";
import { Header } from "./components/landing/Header/ui";
import { About } from "./components/landing/About/ui";
import { Lesson } from "./components/Lesson/ui";
import { Footer } from "./components/Footer/ui";
import { EntryLesson } from "./components/EntryLesson/ui";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Lesson />
      <EntryLesson />
      <Footer />
    </main>
  );
}

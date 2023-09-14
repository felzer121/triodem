import { Button } from "../../../../node_modules/@mui/material/index";
import { Container } from "../Container/ui";
import { EntryLessonFonVector } from "../landing/Vector/ui";
import styles from "./style.module.css";

export const EntryLesson = () => {
  return (
    <div className={styles.entryLesson}>
      <Container>
        <div className={styles.entryLessonContent}>
          <div className={styles.entryLessonContent__about}>
            <h2>Запишите ребенка на пробный урок</h2>
            <p>
              Учим разрабатывать игры, создавать сайты, рисовать персонажей,
              запускать блоги и даже противостоять хакерам. Ребята проводят
              время с пользой, находят хобби и пробуют себя в перспективных
              профессиях
            </p>
            <Button
              size="large"
              sx={{ fontSize: 20, padding: "15px 50px" }}
              variant="contained"
              color="primary"
            >
              Пробный урок
            </Button>
          </div>
        </div>
      </Container>
      <div className={styles.entryLessonFon}>
        <EntryLessonFonVector />
      </div>
    </div>
  );
};

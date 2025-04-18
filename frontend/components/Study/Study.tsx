import StudyCase from "../StudyCase/StudyCase";
import styles from "./Study.module.css";

export default function Study() {
  return (
    <section id="study" className={styles.study}>
      <div className={styles.study_text}>
        <h1>Обучение</h1>
        <p>
          Solving user & business problems since last 15+ years. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <StudyCase></StudyCase>
    </section>
  );
}

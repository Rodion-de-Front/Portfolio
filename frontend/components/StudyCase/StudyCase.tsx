import styles from "./StudyCase.module.css";
import Image from "next/image";

export default function StudyCase() {
  return (
    <div className={styles.study_case}>
      <div className={styles.study_case_text}>
        <div className={styles.study_case_label}>Fintech</div>
        <h2>Work name here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <button>Посмотреть</button>
      </div>
      <Image
        width={446}
        height={300}
        src={"/photo.png"}
        alt={"Image of study case"}
      ></Image>
    </div>
  );
}

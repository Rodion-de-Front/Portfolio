import styles from "./Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="home" className={styles.home}>
        <section className={styles.introduction}>
          <div>
            <h1>Калиничев Родион Романович</h1>
            <p>
              Привет! Меня зовут Родион, я веб-разработчик и разработчик
              Telegram-ботов. Я занимаюсь созданием современных и функциональных
              систем, которые привлекают внимание.
            </p>
            <button className={styles.start_btn}>Давайте начнём &gt;</button>
          </div>
          <Image src="/photo.png" width={350} height={350} alt="My photo" />
        </section>
        <section className={styles.clients}>
          <h3>Работал с </h3>
        </section>
      </div>
    </>
  );
}

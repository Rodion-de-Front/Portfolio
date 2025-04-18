import PartnerCard from "../PartnerCard/PartnerCard";
import styles from "./Home.module.css";
import Image from "next/image";

const partners = [
  {
    name: "Partner 1",
    logo: "/1.png",
    link: "https://partner1.com",
  },
  {
    name: "Partner 2",
    logo: "/1.png",
    link: "https://partner2.com",
  },
  {
    name: "Partner 3",
    logo: "/1.png",
    link: "https://partner3.com",
  },
];

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.introduction}>
        <div>
          <h1>Калиничев Родион Романович</h1>
          <p>
            Привет! Меня зовут Родион, я разработчик web-приложений и
            Telegram-ботов. Я занимаюсь созданием современных и функциональных
            систем, которые пользуются спросом.
          </p>
          <a href="#study">
            <button className={styles.start_btn}>function getStarted()</button>
          </a>
        </div>
        <Image src="/photo.png" width={350} height={350} alt="My photo" />
      </div>
      <div className={styles.partners}>
        <h3>Работал с </h3>
        <div className={styles.partners_row}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partner_card}>
              <PartnerCard
                name={partner.name}
                logo={partner.logo}
                link={partner.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

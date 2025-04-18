import Image from "next/image";

interface PartnerParams {
  name: string;
  logo: string;
  link: string;
}

export default function PartnerCard(props: PartnerParams) {
  return (
    <a href={props.link}>
      <Image
        width={100}
        height={50}
        src={props.logo}
        alt={`Logo of ${props.name}`}
      ></Image>
    </a>
  );
}

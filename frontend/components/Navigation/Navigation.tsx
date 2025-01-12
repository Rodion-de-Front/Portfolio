"use client";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";

type Navlink = {
  label: string;
  href: string;
};

type Props = {
  handleLol(link: string): void;
  navlinks: Navlink[];
  currentLink: string;
};

export default function Navigation({
  navlinks,
  handleLol,
  currentLink,
}: Props) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {navlinks.map((link) => {
        const isActive = currentLink === link.href;

        return (
          <a
            key={link.label}
            href={`${link.href}`}
            className={isActive ? `${styles.active_item}` : ""}
            onClick={() => handleLol(link.href)}
          >
            {link.label}
          </a>
        );
      })}
    </>
  );
}

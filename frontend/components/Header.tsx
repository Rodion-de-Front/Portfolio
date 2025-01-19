"use client";

import Navigation from "./Navigation/Navigation";
import { useState } from "react";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Обучение", href: "#study" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [currentLink, setCurrentLink] = useState("/");

  function handleLol(link: string) {
    setCurrentLink(link);
  }

  return (
    <header>
      <Navigation
        currentLink={currentLink}
        handleLol={handleLol}
        navlinks={navItems}
      ></Navigation>
    </header>
  );
}

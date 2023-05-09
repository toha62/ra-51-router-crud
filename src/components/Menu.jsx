import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className="menu">
      <Link
        className={activeIndex === 0 ? "menu__item menu__item-active" : "menu__item"}
        to="/"
        onClick={() => setActiveIndex(0)}
      >
        Главная
      </Link>
      <Link
        className={activeIndex === 1 ? "menu__item menu__item-active" : "menu__item"}
        to="/drift"
        onClick={() => setActiveIndex(1)}
      >
        Дрифт-такси
      </Link>
      <Link
        className={activeIndex === 2 ? "menu__item menu__item-active" : "menu__item"}
        to="/timeattack"
        onClick={() => setActiveIndex(2)}
      >
        Time Attack
      </Link>
      <Link
        className={activeIndex === 3 ? "menu__item menu__item-active" : "menu__item"}
        to="/forza"
        onClick={() => setActiveIndex(3)}
      >
        Forza Karting
      </Link>
    </nav>
  );
}
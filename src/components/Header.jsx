import React from 'react';
import styles from '../styles/Header.module.css';
import DropdownMenu from './DropdownMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  const regions = ['Атырауская', 'Мангистауская', 'Западно-Казахстанская'];
  const directions = ['Наука', 'Образование', 'Инновации'];
  const organizations = ['ВУЗы', 'НИИ', 'Компании'];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>DDMSU</div>
      <nav className={styles.nav}>
        {/* Навигация для Desktop-5 */}
        <Link to="/">Главная</Link>
        <a href="#">Проекты</a>
        <a href="#">Сотрудники</a>
        <a href="#">Публикации</a>
        <a href="#">Финансы</a>
      </nav>
      {/* Меню для Desktop-1/4 */}
      <nav className={styles.nav}>
        <DropdownMenu title="РЕГИОН" items={regions} />
        <DropdownMenu title="НАПРАВЛЕНИЕ" items={directions} />
        <DropdownMenu title="ОРГАНИЗАЦИЯ" items={organizations} />
      </nav>
      <div className={styles.lang}>
        <a href="#">KZ</a>
        <a href="#">RU</a>
        <a href="#">EN</a>
      </div>
      <div className={styles.login}>
        <span role="img" aria-label="user-icon">
          &#128100;
        </span>
        ВОЙТИ
      </div>
    </header>
  );
};

export default Header;
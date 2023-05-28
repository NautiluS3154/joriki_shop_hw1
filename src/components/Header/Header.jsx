import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
 <nav>
    <ul className="navbar">
    <div className="links">
    <li><a href="#">Главная</a></li>
      <li><a href="#">О нас</a></li>
      <li><a href="#">Услуги</a></li>
      <li><a href="#">Контакты</a></li>
    </div>
      <li className="search-bar">
        <input type="text" placeholder="Поиск..." />
        <button type="submit">Поиск</button>
      </li>
    </ul>
  </nav>
    </div>
  );
}

export default Header;

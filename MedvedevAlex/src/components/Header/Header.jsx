import './Header.css';

import React from 'react';

import Menu from '../Menu'
import Brand from '../Brand'

const items = [
  {title: 'Домашняя', href: '#'},
  {title: 'Личный кабинет', href: '#'},
  {title: 'Комментарии', href: '#'},
  {title: 'Рейтинг блогеров', href: '#'},
];

export default function Header() {
  return (
    <header className="Header">
      <div className="container">
        <Brand/>
        <Menu items={items}/>
      </div>
    </header>
  )
}
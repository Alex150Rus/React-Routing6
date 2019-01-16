import './Menu.css';

import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu(props) {
  const {items} = props;
  return (
    <div className="Menu">
      <ul className="menuHeader">
        {items.map((item, idx) => <li className="menuList" key={idx}><Link to={item.href} className="menuLink">
          {item.title}</Link></li>)}
      </ul>
    </div>
  )
}
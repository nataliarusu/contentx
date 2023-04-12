import React from "react";
import Link from "next/link";

const Header = ({ menu }) => {
    console.log(menu, ' Header.js')
  return (
    <header>
      <nav>
        <ul>
          {menu.menu_items.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

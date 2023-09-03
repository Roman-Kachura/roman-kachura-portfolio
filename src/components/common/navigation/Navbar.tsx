import React, {FC} from 'react';
import style from './Navbar.module.scss';
import {Link} from 'react-scroll';

interface NavbarProps {
  headerShow: boolean
  showMobileMenu: boolean
}

const links = [
  {href: 'home', title: 'Home'},
  {href: 'about', title: 'About'},
  {href: 'skills', title: 'Skills'},
  {href: 'works', title: 'Works'},
  {href: 'contacts', title: 'Contacts'}
];

export const Navbar: FC<NavbarProps> = ({headerShow, showMobileMenu}) => {
  let finalClassName = `${style.nav}`;
  if (headerShow) finalClassName += ` ${style.show}`;
  if (window.innerWidth < 480) {
    if (showMobileMenu) finalClassName = `${style.showMobileMenu}`;
  }

  return (
    <nav className={finalClassName}>
      {
        links.map(l =>
          <Link
            activeClass={style.active}
            key={l.href}
            to={l.href}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >{l.title}</Link>
        )
      }
    </nav>
  )
}
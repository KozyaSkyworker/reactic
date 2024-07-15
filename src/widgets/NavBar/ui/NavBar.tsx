import { ThemeSwither } from 'widgets/ThemeSwitcher';
import classes from './navbar.module.scss';
import { NavBarItems } from 'widgets/NavBarItem/model/navbaritem';
import { NavBarItem } from 'widgets/NavBarItem';
import { memo } from 'react';

const NavBar = memo(() => {
  return (
    <header className={classes.header}>
      <span className={classes.header__logo}>LOGO</span>
      <div className={classes.header__links}>
        {NavBarItems.map((itm) => {
          return <NavBarItem key={itm.to} text={itm.text} to={itm.to} />;
        })}
      </div>
      <ThemeSwither externalClass={classes.themeswithcer} />
    </header>
  );
});

export default NavBar;

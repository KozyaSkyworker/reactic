import { ThemeSwither } from 'widgets/ThemeSwitcher';
import classes from './navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const NavBar = () => {
  return (
    <header className={classes.header}>
      <span className={classes.header__logo}>LOGO</span>
      <div className={classes.header__links}>
        <AppLink to={'/'} theme={AppLinkTheme.NAVIGATION}>
          home
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.NAVIGATION}>
          about
        </AppLink>
        <AppLink to={'/contacts'} theme={AppLinkTheme.NAVIGATION}>
          contacts
        </AppLink>
      </div>
      <ThemeSwither externalClass={classes.themeswithcer} />
    </header>
  );
};

export default NavBar;

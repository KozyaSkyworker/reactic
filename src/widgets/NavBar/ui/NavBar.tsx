import classes from './navbar.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';

const NavBar = () => {
  return (
    <header className={classes.header}>
      <span className={classes.header__logo}>LOGO</span>
      <div className={classes.header__links}>
        <AppLink to={'/'}>home</AppLink>
        <AppLink to={'/about'}>about</AppLink>
        <AppLink to={'/contacts'}>contacts</AppLink>
      </div>
    </header>
  );
};

export default NavBar;

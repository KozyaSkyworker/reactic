import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { NavBarItemType } from '../model/navbaritem';
import { memo } from 'react';

export const NavBarItem = memo(({ to, text }: NavBarItemType) => {
  console.log('nav bar item render');
  return (
    <AppLink to={to} theme={AppLinkTheme.NAVIGATION}>
      {text}
    </AppLink>
  );
});

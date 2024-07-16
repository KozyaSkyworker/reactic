import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { NavBarItemType } from '../model/navbaritem';
import { memo } from 'react';

export const NavBarItem = memo(({ to, text }: NavBarItemType) => {
  return (
    <AppLink to={to} theme={AppLinkTheme.NAVIGATION}>
      {text}
    </AppLink>
  );
});

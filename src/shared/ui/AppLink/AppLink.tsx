import { Link, LinkProps } from 'react-router-dom';
import classes from './applink.module.scss';
import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  NAVIGATION = 'navigation',
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, theme = AppLinkTheme.CLEAR, ...otherLinkProps } = props;

  return (
    <Link className={classNames(classes.link, {}, [classes[theme]])} to={to} {...otherLinkProps}>
      {children}
    </Link>
  );
};

export default AppLink;

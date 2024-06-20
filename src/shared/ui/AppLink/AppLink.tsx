import { Link, LinkProps } from 'react-router-dom';
import classes from './applink.module.scss';
import { FC, ReactNode } from 'react';
import { classNames } from 'helpers/classNames';
import { useTheme } from 'app/contexts/theme';

interface AppLinkProps extends LinkProps {
  children: ReactNode;
}

const AppLink: FC<AppLinkProps> = ({ children, to }) => {
  const { theme } = useTheme();

  return (
    <Link className={classNames(classes.link, {}, [theme])} to={to}>
      {children}
    </Link>
  );
};

export default AppLink;

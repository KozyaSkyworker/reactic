import { Link, LinkProps } from 'react-router-dom';
import classes from './applink.module.scss';
import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
  children: ReactNode;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, ...otherLinkProps } = props;

  return (
    <Link className={classNames(classes.link, {})} to={to} {...otherLinkProps}>
      {children}
    </Link>
  );
};

export default AppLink;

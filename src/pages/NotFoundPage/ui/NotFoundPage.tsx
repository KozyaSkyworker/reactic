import { classNames } from 'helpers/classNames';
import classes from './notfoundpage.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={classNames(classes.notfoundPage, {}, [])}>
      <h1>Страниа по такому пути не найдена!</h1>
    </div>
  );
};

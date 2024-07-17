import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { useSelector } from 'react-redux';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './profilecard.module.scss';
import AppInput from 'shared/ui/AppInput/AppInput';

export const ProfileCard = () => {
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(classes.profilecard)}>
      <AppInput value={data?.name} />
      <AppInput value={data?.age} type="number" />
      <AppInput value={data?.country} />
      <AppInput value={data?.city} />
    </div>
  );
};

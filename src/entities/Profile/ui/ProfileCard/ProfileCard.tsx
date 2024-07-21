import { classNames } from 'shared/lib/classNames/classNames';

import classes from './profilecard.module.scss';
import AppInput from 'shared/ui/AppInput/AppInput';
import { IProfile } from 'entities/Profile/model/types/profile';
import { AppSelect } from 'shared/ui/AppSelect';
import { SelectOption } from 'shared/ui/AppSelect/ui/AppSelect';
import { Currency } from 'shared/const/common';

interface ProfileCardProps {
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  onChangeName: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCountry: (value?: string) => void;
  onChangeCity: (value?: string) => void;
  onChangeAvatar: (value?: string) => void;
  isEditDisabled?: boolean;
  onChangeCurrency: (value?: Currency) => void;
  currencySelectOptions: SelectOption[];
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    isLoading,
    error,
    onChangeName,
    onChangeAge,
    onChangeCountry,
    onChangeCity,
    onChangeAvatar,
    isEditDisabled,
    onChangeCurrency,
    currencySelectOptions,
  } = props;

  return (
    <div
      className={classNames(classes.profilecard, { [classes.profilecard_loading]: isLoading }, [])}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={classNames(classes.profilecard__content)}>
          <div className={classNames(classes.profilecard__inputs)}>
            <div className={classNames(classes.profilecard__left)}>
              <AppInput value={data?.name} onChange={onChangeName} disabled={isEditDisabled} />
              <AppInput
                value={data?.age}
                type="number"
                onChange={onChangeAge}
                disabled={isEditDisabled}
              />
              <AppInput
                value={data?.country}
                onChange={onChangeCountry}
                disabled={isEditDisabled}
              />
              <AppInput value={data?.city} onChange={onChangeCity} disabled={isEditDisabled} />
            </div>
            <div className={classNames(classes.profilecard__avatar)}>
              {/* <div className={classNames(classes.profilecard__skeleton)}></div> */}
              <img className={classNames(classes.profilecard__img)} src={data?.avatar} alt="" />
            </div>
          </div>
          <AppInput
            foreignClasses={classNames(classes.profilecard__avatarinput)}
            value={data?.avatar}
            onChange={onChangeAvatar}
            disabled={isEditDisabled}
          />
          <label className={classNames(classes.profilecard__select__wrapper)}>
            Предпочитаемая валюта
            <AppSelect
              value={data?.currency}
              options={currencySelectOptions}
              onChange={onChangeCurrency}
              disabled={isEditDisabled}
            />
          </label>
        </div>
      )}
    </div>
  );
};

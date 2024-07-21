import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileIsEditDisabled,
  getProfileIsLoading,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducresList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';

import classes from './profilepage.module.scss';

const reducers: ReducresList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-expect-error idk how to fix it
    dispatch(fetchProfileData());
  }, [dispatch]);

  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const isEditDisabled = useSelector(getProfileIsEditDisabled);

  const onChangeName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ name: value || '' }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: number) => {
      dispatch(profileActions.updateData({ age: value || 18 }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ country: value || '' }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ city: value || '' }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateData({ avatar: value || '' }));
    },
    [dispatch],
  );

  // currency
  // username

  const editBtnHandler = useCallback(() => {
    dispatch(profileActions.enableInputsEdit(false));
  }, [dispatch]);

  const saveBtnHandler = useCallback(() => {
    // @ts-expect-error idk how to fix it
    dispatch(updateProfileData());
  }, [dispatch]);

  const cancelBtnHandler = useCallback(() => {
    dispatch(profileActions.cancelInputsEdit(true));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="profilepage">
        <h1>Profile Page</h1>
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeCountry={onChangeCountry}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          isEditDisabled={isEditDisabled}
        />

        {isEditDisabled ? (
          <AppButton
            foreignClasses={classes.profilepage__btn}
            theme={ThemeButton.OUTLINE_HOVER}
            onClick={editBtnHandler}>
            Редактировать
          </AppButton>
        ) : (
          <>
            <AppButton
              foreignClasses={classes.profilepage__btn}
              theme={ThemeButton.OUTLINE_HOVER}
              onClick={saveBtnHandler}>
              Сохранить
            </AppButton>
            <AppButton
              foreignClasses={classes.profilepage__btn}
              theme={ThemeButton.OUTLINE_HOVER}
              onClick={cancelBtnHandler}>
              Отменить
            </AppButton>
          </>
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

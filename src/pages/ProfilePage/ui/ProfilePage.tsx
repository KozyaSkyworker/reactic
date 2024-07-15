import { profileReducer } from 'entities/Profile';
import {
  DynamicModuleLoader,
  ReducresList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducresList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="profilepage">
        <h1>Profile Page : username</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { Theme } from 'app/providers/theme';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Currency } from 'shared/const/common';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from 'entities/Profile';

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/Profile',
  component: ProfilePage,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  profile: profileReducer,
};

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider
        initialState={{
          profile: {
            formData: {
              name: 'Danila',
              city: 'Ulyanovsk',
              country: 'Russia',
              age: '22',
              currency: Currency.RUB,
              username: 'danilka',
              avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
            },
          },
        }}
        asyncReducers={defaultAsyncReducers}>
        <Story />
      </StoreProvider>
    ),
  ],
};

// export const Dark: Story = {
//   args: {},
//   decorators: [
//     (Story) => (
//       <div className={`app ${Theme.DARK}`}>
//         <StoreProvider
//           initialState={{
//             profile: {
//               data: {
//                 name: 'Danila',
//                 city: 'Ulyanovsk',
//                 country: 'Russia',
//                 age: '22',
//                 currency: Currency.RUB,
//                 username: 'danilka',
//                 avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
//               },
//             },
//           }}
//           asyncReducers={defaultAsyncReducers}>
//           <Story />
//         </StoreProvider>
//       </div>
//     ),
//   ],
// };

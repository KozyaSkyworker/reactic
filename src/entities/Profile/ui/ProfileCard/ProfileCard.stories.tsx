import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Theme } from 'app/providers/theme';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Currency } from 'shared/const/common';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

const meta: Meta<typeof ProfileCard> = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  profile: profileReducer,
};

export const Common: Story = {
  args: {
    data: {
      name: 'Danila',
      city: 'Ulyanovsk',
      country: 'Russia',
      age: '22',
      currency: Currency.RUB,
      username: 'danilka',
      avatar: 'https://i.pinimg.com/474x/97/68/7a/97687a310b2d76aeb10cb70e09882405.jpg',
    },
  },
  decorators: [
    (Story) => (
      <StoreProvider
        initialState={{
          profile: {},
        }}
        asyncReducers={defaultAsyncReducers}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    isEditDisabled: true,
  },
  decorators: [
    (Story) => (
      <StoreProvider
        initialState={{
          profile: {},
        }}
        asyncReducers={defaultAsyncReducers}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const Loading: Story = {
  args: { isLoading: true },
  decorators: [
    (Story) => (
      <StoreProvider initialState={{ profile: {} }} asyncReducers={defaultAsyncReducers}>
        <Story />
      </StoreProvider>
    ),
  ],
};

// export const Disabled: Story = {
//   args: {},
//   decorators: [
//     (Story) => (
//       <StoreProvider initialState={{ profile: { isLoading: false, isEditDisabled: false } }}>
//         <Story />
//       </StoreProvider>
//     ),
//   ],
// };

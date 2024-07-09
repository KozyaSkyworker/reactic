import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { Theme } from 'app/providers/theme';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof LoginForm> = {
  title: 'Features/LoginForm',
  component: LoginForm,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider
        initialState={{ loginForm: { username: 'u', password: 'p', isLoading: false } }}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <StoreProvider
          initialState={{ loginForm: { username: 'u', password: 'p', isLoading: false } }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};

export const LoadingLight: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider
        initialState={{ loginForm: { username: 'u', password: 'p', isLoading: true } }}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const LoadingDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <StoreProvider
          initialState={{ loginForm: { username: 'u', password: 'p', isLoading: true } }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};

export const ErrorLight: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider
        initialState={{
          loginForm: { username: 'u', password: 'p', isLoading: false, error: 'error' },
        }}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const ErrorDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <StoreProvider
          initialState={{
            loginForm: { username: 'u', password: 'p', isLoading: false, error: 'error' },
          }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};

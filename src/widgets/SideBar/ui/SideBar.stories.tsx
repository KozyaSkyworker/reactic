import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';
import { Theme } from 'app/providers/theme';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof SideBar> = {
  title: 'Widgets/SideBar',
  component: SideBar,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider initialState={{ user: {} }}>
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
        <StoreProvider initialState={{ user: {} }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};

export const AuthLight: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreProvider initialState={{ user: { authData: { id: '1', username: '123' } } }}>
        <Story />
      </StoreProvider>
    ),
  ],
};

export const AuthDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <StoreProvider initialState={{ user: { authData: { id: '1', username: '123' } } }}>
          <Story />
        </StoreProvider>
      </div>
    ),
  ],
};

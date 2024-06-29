import type { Meta, StoryObj } from '@storybook/react';
import ContactsPage from './ContactsPage';
import { Theme } from 'app/providers/theme';

const meta: Meta<typeof ContactsPage> = {
  title: 'Pages/Contacts',
  component: ContactsPage,
  parameters: {
    theme: Theme.DARK,
  },
};

export default meta;
type Story = StoryObj<typeof ContactsPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story />
      </div>
    ),
  ],
};

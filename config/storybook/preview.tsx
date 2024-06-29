import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/theme';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className={`app ${Theme.LIGHT}`}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default preview;

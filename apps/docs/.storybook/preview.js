import { app } from '@storybook/vue3';
import Icons from '@onboarding/ui/src/components/icons/index';

import { createPinia } from 'pinia';

const pinia = createPinia();
import { withGlobals } from '../addon-toolbar/withGlobals';

// eslint-disable-next-line turbo/no-undeclared-env-vars, no-undef
const stylePath = process.env.NODE_ENV === 'production' ? './styles' : '../src/styles';
app.use(pinia);
app.use(Icons);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewHead: (head) => `
    ${head}
    <link href=${stylePath}/theme-variables.css rel="stylesheet" />
    <link href=${stylePath}/theme.css rel="stylesheet" />
  `
};

export const decorators = [withGlobals];
export const globalTypes = {
  theme: {
    name: 'Color themes',
    description: 'Global theme for components',
    defaultValue: 'nobrand',
    toolbar: {
      icon: 'mirror',
      items: ['nobrand', 'bricks', 'helloasso'],
      title: 'theme',
      dynamicTitle: true
    }
  }
};

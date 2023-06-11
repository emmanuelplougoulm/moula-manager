import { action } from '@storybook/addon-actions';
import MenuButton from '@onboarding/ui/src/components/menu-button/MenuButton.vue';
import { IconType } from '@onboarding/ui/src/components/icons/types';
export default {
  title: 'Components/MenuButton',
  component: MenuButton,
  argTypes: {
    leftIcon: {
      control: { type: 'select' },
      options: [...IconType]
    },
    rightIcon: {
      control: { type: 'select' },
      options: [...IconType]
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'ghost', 'highlighted', 'completed']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    leftIcon: 'Plus',
    rightIcon: 'MoreVert',
    type: 'highlighted'
  }
};
const Template = (args) => ({
  components: { MenuButton },
  setup() {
    return { args };
  },
  template: '<MenuButton v-bind="args" @click="click"/>',
  methods: {
    click: action('click')
  }
});

export const Element = Template.bind({});

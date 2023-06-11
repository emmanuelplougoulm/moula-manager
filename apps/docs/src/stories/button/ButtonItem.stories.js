import { action } from '@storybook/addon-actions';
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';
import { IconType } from '@onboarding/ui/src/components/icons/types';
export default {
  title: 'Components/Button',
  component: ButtonItem,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...IconType]
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['no-icon', 'icon-only', 'left-icon', 'right-icon']
    },
    click: {
      action: 'click'
    },
    state: {
      control: { type: 'select' },
      options: ['enabled', 'disabled']
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'link']
    }
  }
};
const Template = (args) => ({
  components: { ButtonItem },
  setup() {
    return { args };
  },
  template: '<ButtonItem text="Button" v-bind="args" @click="action"/>',
  methods: { action: action('clicked') }
});

export const Element = Template.bind({});

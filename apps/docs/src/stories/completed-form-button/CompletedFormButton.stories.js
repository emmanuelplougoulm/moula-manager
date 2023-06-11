import { action } from '@storybook/addon-actions';
import CompletedFormButton from '@onboarding/ui/src/components/completed-form-button/CompletedFormButton.vue';
export default {
  title: 'Components/CompletedFormButton',
  component: CompletedFormButton,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    title: 'Title',
    subtitle: [
      ['Phone number', 'Email address'],
      ['Address', 'Zipcode', 'City']
    ]
  }
};
const Template = (args) => ({
  components: { CompletedFormButton },
  setup() {
    return { args };
  },
  template: '<CompletedFormButton v-bind="args" @click="click"/>',
  methods: {
    click: action('click')
  }
});

export const Element = Template.bind({});

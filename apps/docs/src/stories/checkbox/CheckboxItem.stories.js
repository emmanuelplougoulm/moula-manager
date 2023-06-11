import { action } from '@storybook/addon-actions';
import CheckboxItem from '@onboarding/ui/src/components/checkbox/CheckboxItem.vue';

export default {
  title: 'Components/Checkbox',
  component: CheckboxItem,
  argTypes: {
    required: {
      control: { type: 'boolean' }
    }
  },
  args: {
    text: 'Text',
    required: true
  }
};

const Template = (args) => ({
  components: { CheckboxItem },
  setup() {
    return { args };
  },
  template: '<CheckboxItem v-bind="args" @update:checked="action"/>',
  methods: { action: action('update:checked') }
});

export const Element = Template.bind({});

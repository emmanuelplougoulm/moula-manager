import { action } from '@storybook/addon-actions';
import CheckboxGroup from '@onboarding/ui/src/components/checkbox-group/CheckboxGroup.vue';
export default {
  title: 'Components/CheckboxGroup',
  args: {
    label: 'Label',
    name: 'name',
    options: [
      {
        id: 0,
        text: 'Option 1',
        value: 'option-1',
        disabled: false
      },
      {
        id: 1,
        text: 'Option 2',
        value: 'option-2',
        disabled: false
      },
      {
        id: 2,
        text: 'Option 3',
        value: 'option-3',
        disabled: true
      }
    ]
  }
};

const Template = (args) => ({
  components: { CheckboxGroup },
  setup() {
    return { args };
  },
  template: '<CheckboxGroup v-bind="args" @select:options="action"/>',
  methods: { action: action('select:options') }
});

export const Element = Template.bind({});

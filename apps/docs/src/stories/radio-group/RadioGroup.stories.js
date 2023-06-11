import { action } from '@storybook/addon-actions';
import RadioGroup from '@onboarding/ui/src/components/radio-group/RadioGroup.vue';
export default {
  title: 'Components/RadioGroup',
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
    ],
    modelValue: 'option-2'
  }
};

const Template = (args) => ({
  components: { RadioGroup },
  setup() {
    return { args };
  },
  template: '<RadioGroup v-bind="args" @update:model-value="action"/>',
  methods: { action: action('update:modelValue') }
});

export const Element = Template.bind({});

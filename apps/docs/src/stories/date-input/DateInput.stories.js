import { action } from '@storybook/addon-actions';
import DateInput from '@onboarding/ui/src/components/date-input/DateInput.vue';
import { ref } from 'vue';

export default {
  title: 'Components/DateInput',
  component: DateInput,
  argTypes: {
    required: {
      control: { type: 'boolean' }
    }
  }
};

const Template = (args) => ({
  components: { DateInput },
  setup() {
    const value = ref({ value: '', isValid: undefined });
    return { args, value };
  },
  template: `
  <div style="display: flex; justify-content: center; align-items: center; height:300px; ">
    <DateInput v-model="value" v-bind="args" @update:model-value="action"/>
  </div>`,
  methods: { action: action('update:modelValue') }
});

export const Element = Template.bind({});
Element.args = {
  label: 'Label',
  required: true
};

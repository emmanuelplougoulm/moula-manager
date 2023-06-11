import { action } from '@storybook/addon-actions';
import DatePicker from '@onboarding/ui/src/components/date-picker/DatePicker.vue';
import { ref } from 'vue';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  argTypes: {
    required: {
      control: { type: 'boolean' }
    }
  }
};

const Template = (args) => ({
  components: { DatePicker },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
  <div style="display: flex; justify-content: center; align-items: center; height:300px; ">
    <DatePicker v-model="value" v-bind="args" @update:model-value="action"/>
  </div>`,
  methods: { action: action('update:modelValue') }
});

export const Element = Template.bind({});
Element.args = {
  label: 'Label',
  required: true,
  lang: 'fr'
};

import TextInput from '@onboarding/ui/src/components/text-input/TextInput.vue';
import { ref } from 'vue';

export default {
  title: 'Components/TextInput',
  component: TextInput
};

const Template = (args) => ({
  components: { TextInput },
  setup() {
    const value = ref({ value: '', isValid: undefined });
    return { args, value };
  },
  template: `<div style="display: flex; justify-content: center; align-items: center; width:100%; height:300px; ">
  <div style="display: flex; justify-content: center; align-items: center; width:800px; ">
  <TextInput v-model="value" v-bind="args" />
  </div>
</div>`
});

export const Element = Template.bind({});
Element.args = {
  label: 'Firstname',
  required: true,
  pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
  tooltipTitle: 'Ceci est un titre',
  tooltipDescription: 'Ceci est une description'
};

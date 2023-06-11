import TextArea from '@onboarding/ui/src/components/text-area/TextArea.vue';
import { ref } from 'vue';

export default {
  title: 'Components/TextArea',
  component: TextArea
};

const Template = (args) => ({
  components: { TextArea },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `<div style="display: flex; justify-content: center; align-items: center; width:100%; height:300px; ">
  <div style="display: flex; justify-content: center; align-items: center; width:800px; ">
  <TextArea v-model="value" v-bind="args" />
  </div>
</div>`
});

export const Element = Template.bind({});
Element.args = {
  label: 'Description',
  required: true,
  pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
  tooltipTitle: 'Ceci est un titre',
  tooltipDescription: 'Ceci est une description'
};

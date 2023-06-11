import LabelItem from '@onboarding/ui/src/components/label/LabelItem.vue';

export default {
  title: 'Components/Label',
  component: LabelItem
};

const Template = (args) => ({
  components: { LabelItem },
  setup() {
    return { args };
  },
  template: '<LabelItem v-bind="args" />'
});

export const Element = Template.bind({});
Element.args = {
  text: 'City',
  highlighted: true
};

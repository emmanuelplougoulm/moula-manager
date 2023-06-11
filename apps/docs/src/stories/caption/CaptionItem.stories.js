import CaptionItem from '@onboarding/ui/src/components/caption/CaptionItem.vue';

export default {
  title: 'Components/Caption',
  component: CaptionItem
};

const Template = (args) => ({
  components: { CaptionItem },
  setup() {
    return { args };
  },
  template: '<CaptionItem v-bind="args" />'
});

export const Element = Template.bind({});
Element.args = {
  text: 'This is a caption'
};

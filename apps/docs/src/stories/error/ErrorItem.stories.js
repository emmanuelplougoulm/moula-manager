import ErrorItem from '@onboarding/ui/src/components/error/ErrorItem.vue';

export default {
  title: 'Components/Error',
  component: ErrorItem
};

const Template = (args) => ({
  components: { ErrorItem },
  setup() {
    return { args };
  },
  template: '<ErrorItem v-bind="args" />'
});

export const Element = Template.bind({});
Element.args = {
  text: 'This is an error'
};

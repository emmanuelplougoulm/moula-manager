import IntentionColors from './IntentionColors.vue';

export default {
  title: 'Colors/Intention',
  component: IntentionColors
};

const Template = (args) => ({
  components: { IntentionColors },
  setup() {
    return { args };
  },
  template: '<IntentionColors />'
});

export const Intention = Template.bind({});

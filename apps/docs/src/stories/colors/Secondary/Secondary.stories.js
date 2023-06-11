import SecondaryColors from './SecondaryColors.vue';

export default {
  title: 'Colors/Secondary',
  component: SecondaryColors
};

const Template = (args) => ({
  components: { SecondaryColors },
  setup() {
    return { args };
  },
  template: '<SecondaryColors />'
});

export const Secondary = Template.bind({});

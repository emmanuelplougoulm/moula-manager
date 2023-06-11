import PrimaryColors from './PrimaryColors.vue';

export default {
  title: 'Colors/Primary',
  component: PrimaryColors
};

const Template = (args) => ({
  components: { PrimaryColors },
  setup() {
    return { args };
  },
  template: '<PrimaryColors />'
});

export const Primary = Template.bind({});

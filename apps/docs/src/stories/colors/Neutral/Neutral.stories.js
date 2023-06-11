import NeutralColors from './NeutralColors.vue';

export default {
  title: 'Colors/Neutral',
  component: NeutralColors
};

const Template = (args) => ({
  components: { NeutralColors },
  setup() {
    return { args };
  },
  template: '<NeutralColors />'
});

export const Neutral = Template.bind({});

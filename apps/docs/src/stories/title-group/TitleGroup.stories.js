import TitleGroup from '@onboarding/ui/src/components/title-group/TitleGroup.vue';

export default {
  title: 'Components/TitleGroup',
  component: TitleGroup,
  args: {
    title: 'Nunc sit amet consectetur ',
    subtitle: 'Nullam pellentesque felis ac faucibus vestibulum',
    description:
      'Phasellus quis justo dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  }
};

const Template = (args) => ({
  components: { TitleGroup },
  setup() {
    return { args };
  },
  template: '<TitleGroup v-bind="args"/>'
});

export const Element = Template.bind({});

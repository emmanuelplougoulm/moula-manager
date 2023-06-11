import AlertItem from '@onboarding/ui/src/components/alert/AlertItem.vue';

export default {
  title: 'Components/Alert',
  component: AlertItem,
  argTypes: {
    colorType: {
      control: { type: 'select' },
      options: ['primary', 'warning', 'error', 'success', 'info']
    }
  },
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et penatibus eleifend vulputate condimentum tempus.'
  }
};

const Template = (args) => ({
  components: { AlertItem },
  setup() {
    return { args };
  },
  template: '<AlertItem v-bind="args"/>'
});

export const Element = Template.bind({});

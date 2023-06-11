import IconViewer from './IconViewer.vue';
import { IconType } from '@onboarding/ui/src/components/icons/types';
export default {
  title: 'Components/Icon',
  component: IconViewer,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...IconType]
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    }
  }
};
const Template = (args) => ({
  components: { IconViewer },
  setup() {
    return { args };
  },
  template: '<IconViewer v-bind="args" />'
});

export const Element = Template.bind({});

import { action } from '@storybook/addon-actions';
import EditDeleteButton from '@onboarding/ui/src/components/edit-delete-button/EditDeleteButton.vue';
import { IconType } from '@onboarding/ui/src/components/icons/types';
export default {
  title: 'Components/EditDeleteButton',
  component: EditDeleteButton,
  argTypes: {
    leftIcon: {
      control: { type: 'select' },
      options: [...IconType]
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    leftIcon: 'Plus'
  }
};
const Template = (args) => ({
  components: { EditDeleteButton },
  setup() {
    return { args };
  },
  template: '<EditDeleteButton v-bind="args" @click:edit="editClick" @click:delete="deleteClick"/>',
  methods: {
    editClick: action('click:edit'),
    deleteClick: action('click:delete')
  }
});

export const Element = Template.bind({});

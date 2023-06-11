import { action } from '@storybook/addon-actions';
import { ref } from 'vue';
import DropdownItem from '@onboarding/ui/src/components/dropdown/DropdownItem.vue';

export default {
  title: 'Components/Dropdown',
  component: DropdownItem,
  args: {
    label: 'Label',
    options: [
      {
        id: 1,
        text: 'Option 1: Lorem ipsum dolor sit amet.',
        value: 'option-1'
      },
      {
        id: 2,
        text: 'Option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat odio, accumsan non risus sed, imperdiet malesuada diam. Etiam dictum mauris sed malesuada volutpat. Morbi accumsan vitae enim ut facilisis.',
        value: 'option-2'
      }
    ],
    placeholder: 'Sélectionnez une option'
  }
};

const Template = (args) => ({
  components: { DropdownItem },
  setup() {
    const value = ref({});
    return { args, value };
  },
  template: '<DropdownItem v-model="value" v-bind="args" @update:model-value="action"/>',
  methods: { action: action('update:modelValue') }
});

export const Element = Template.bind({});

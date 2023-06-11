import { mount } from '@vue/test-utils';
import DropdownItem from '../DropdownItem.vue';

const placeholder = 'Sélectionnez une option';
const requiredText = 'This field is required';

const options = [
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
];

describe('DropdownItem component tests', () => {
  it('should display the component with a placeholder when no option is selected', () => {
    const wrapper = mount(DropdownItem, {
      props: {
        label: 'Text',
        options: options,
        placeholder: placeholder,
        modelValue: {}
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with a selected option and emit a update:modelValue event', async () => {
    const wrapper = mount(DropdownItem, {
      props: {
        label: 'Text',
        options: options,
        placeholder: placeholder,
        modelValue: {}
      }
    });
    const option = wrapper.find("[data-testid='option-1']");
    await option.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display an error message if the error prop is not empty', async () => {
    const wrapper = mount(DropdownItem, {
      props: {
        label: 'Text',
        error: requiredText,
        options: options,
        placeholder: placeholder,
        modelValue: {}
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not display an error message if an option is selected', async () => {
    const wrapper = mount(DropdownItem, {
      props: {
        label: 'Text',
        error: requiredText,
        options: options,
        placeholder: placeholder,
        modelValue: {}
      }
    });
    const option = wrapper.find("[data-testid='option-1']");
    await option.trigger('click');

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should close dropdown on click outside', async () => {
    const wrapper = mount(DropdownItem, {
      props: {
        label: 'Text',
        error: requiredText,
        options: options,
        placeholder: placeholder,
        modelValue: {}
      }
    });

    const select = wrapper.find("[data-testid='select']");
    await select.trigger('click');

    const label = wrapper.find("[data-testid='label']");
    await label.trigger('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

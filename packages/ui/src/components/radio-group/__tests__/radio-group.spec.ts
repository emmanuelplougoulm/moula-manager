import { mount } from '@vue/test-utils';
import Icons from '../../icons/index';
import RadioGroup from '../RadioGroup.vue';

const inputTestId = "[data-testid='input-1']";

const options = [
  {
    id: 0,
    text: 'Option 1',
    value: 'option-1',
    disabled: false
  },
  {
    id: 1,
    text: 'Option 2',
    value: 'option-2',
    disabled: false
  }
];

const disabledOptions = [
  {
    id: 0,
    text: 'Option 1',
    value: 'option-1',
    disabled: true
  },
  {
    id: 1,
    text: 'Option 2',
    value: 'option-2',
    disabled: true
  }
];

describe('RadioGroup tests', () => {
  it('should display a highlighted label and no error message by default', async () => {
    const wrapper = mount(RadioGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        name: 'name',
        options: options,
        modelValue: ''
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a non highlighted label and no error message if an option is checked', async () => {
    const wrapper = mount(RadioGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        name: 'name',
        error: 'This field is required',
        options: options,
        modelValue: ''
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with disabled options', () => {
    const wrapper = mount(RadioGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        options: disabledOptions,
        name: 'name',
        modelValue: ''
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit an event when a box is checked', async () => {
    const wrapper = mount(RadioGroup, {
      props: {
        label: 'Text',
        options: options,
        name: 'name',
        modelValue: ''
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
  });
});

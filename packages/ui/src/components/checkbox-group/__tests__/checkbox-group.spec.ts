import { mount } from '@vue/test-utils';
import Icons from '../../icons/index';
import CheckboxGroup from '../CheckboxGroup.vue';

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

describe('CheckboxGroup tests', () => {
  it('should display a highlighted label and no error message by default', async () => {
    const wrapper = mount(CheckboxGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        name: 'name',
        options: options
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a non highlighted label and no error message if an option is checked', async () => {
    const wrapper = mount(CheckboxGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        name: 'name',
        error: 'This field is required',
        options: options
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a highlighted label and an error message if an option is checked then unchecked', async () => {
    const wrapper = mount(CheckboxGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        name: 'name',
        error: 'This field is required',
        options: options
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);
    await input.setValue(false);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with disabled options', () => {
    const wrapper = mount(CheckboxGroup, {
      global: {
        plugins: [Icons]
      },
      props: {
        label: 'Text',
        options: disabledOptions,
        name: 'name'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit an event when a box is checked', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        label: 'Text',
        options: options,
        name: 'name'
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);
    expect(wrapper.emitted()).toHaveProperty('select:options');
  });
});

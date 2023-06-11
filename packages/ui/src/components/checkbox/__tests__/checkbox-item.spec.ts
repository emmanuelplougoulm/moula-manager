import { mount } from '@vue/test-utils';
import CheckboxItem from '../CheckboxItem.vue';

const inputTestId = "[data-testid='input']";

describe('CheckboxItem tests', () => {
  it('should display the component with the default classes', () => {
    const wrapper = mount(CheckboxItem, {
      props: {
        text: 'Text',
        required: false
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with the highlighted classes', () => {
    const wrapper = mount(CheckboxItem, {
      props: {
        text: 'Text',
        required: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit an update:checked event if the box is checked', async () => {
    const wrapper = mount(CheckboxItem, {
      props: {
        text: 'Text',
        required: false
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.emitted()).toHaveProperty('update:checked');
  });

  it('should not display an error message if the checkbox is checked', async () => {
    const wrapper = mount(CheckboxItem, {
      props: {
        text: 'Text',
        required: true,
        error: 'This field is required'
      }
    });
    const input = wrapper.find(inputTestId);
    await input.setValue(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});

it('should display an error message if the checkbox is required and unchecked', async () => {
  const wrapper = mount(CheckboxItem, {
    props: {
      text: 'Text',
      required: true,
      error: 'This field is required'
    }
  });
  const input = wrapper.find(inputTestId);
  await input.setValue(true);
  await input.setValue(false);

  expect(wrapper.html()).toMatchSnapshot();
});

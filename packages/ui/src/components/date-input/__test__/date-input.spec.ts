import { mount } from '@vue/test-utils';
import DateInput from '../DateInput.vue';
import { dayFormat, dayMonthFormat } from './../regex';

const dateInput = "[data-testid='date-input']";
const inputEvent = 'update:modelValue';

describe('DateInput tests', () => {
  it('should display the default class by default', () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '12/07/1998', isValid: undefined }
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the default class if the value is valid even if the required prop is true', () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '12/07/1998', isValid: undefined },
        required: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the highlighted class if there is no value and the required prop is true', () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined },
        required: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the highlighted class if the value is invalid', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('31/02/1998');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a formatted day date if valid', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('12');
    const formattedDate = input.element.value.replace(dayFormat, '$1/');
    expect(formattedDate).toBe('12/');
  });

  it('should display a formatted day-month date if valid', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('12/01');
    const formattedDate = input.element.value.replace(dayMonthFormat, '$1/$2/');
    expect(formattedDate).toBe('12/01/');
  });

  it('should emit an event if the full date is in a valid format', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('12/01/1998');
    expect(wrapper.emitted()).toHaveProperty(inputEvent);
  });

  it('should display a format error if the full date is in an invalid format', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('31/02/////');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a format error if the full date is a non-existing date', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('31/02/1998');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a required error if the input is completed then emptied and the required prop is true', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined },
        required: true
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('1');
    await input.setValue('');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a format error if the input is not fully completed and unfocused', async () => {
    const wrapper = mount(DateInput, {
      props: {
        label: 'Label',
        modelValue: { value: '', isValid: undefined }
      }
    });
    const input = wrapper.find<HTMLInputElement>(dateInput);
    await input.setValue('1');
    await input.trigger('blur');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import { mount } from '@vue/test-utils';
import DatePicker from '../DatePicker.vue';

const value = '12/07/1998';
const inputSelector = '.mx-input';
const clearSelector = '.mx-icon-clear';

describe('DatePicker tests', () => {
  it('should display the default class by default', () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: 'Label',
        modelValue: value,
        lang: 'fr'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the default class if there is a value, even if the required prop is true', () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: 'Label',
        modelValue: value,
        required: true,
        lang: 'fr'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the highlighted class if there is no initial value and the required prop is true', () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: 'Label',
        modelValue: '',
        required: true,
        lang: 'fr'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the highlighted class and a caption', () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: 'Label',
        modelValue: '',
        required: true,
        lang: 'fr',
        caption: 'This is a caption'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a required error and the highlighted classes if the input is emptied and the required prop is true', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: 'Label',
        modelValue: '',
        required: true,
        lang: 'fr'
      }
    });
    const input = wrapper.find(inputSelector);
    await input.trigger('click');
    await input.setValue('12/01/1998');

    const clear = wrapper.find(clearSelector);
    await clear.trigger('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

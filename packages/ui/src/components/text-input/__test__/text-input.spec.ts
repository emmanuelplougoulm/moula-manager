import { mount } from '@vue/test-utils';
import TextInput from '../TextInput.vue';

const textInput = '#text-input';

describe('TextInput tests', () => {
  it('should display highlighted class on label and text-area', () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Description',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: { value: '', isValid: undefined }
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display highlighted class on label and text-area with a caption', () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Description',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: { value: '', isValid: undefined },
        caption: 'This is a caption'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display default class on label and focus pseudo class on input', async () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Informations',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: { value: '2, place Citron', isValid: true }
      }
    });

    const input = wrapper.find(textInput);
    await input.setValue('2, place Citron');

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display highlighted class on label due to invalid format', async () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Adresse complète',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: { value: '', isValid: undefined }
      }
    });

    const input = wrapper.find(textInput);
    await input.setValue('*ù');

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display default class on label and text-area', async () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Nom de famille',
        required: false,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: { value: '', isValid: undefined }
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not display highlighted class and error due to invalid format with the default pattern', async () => {
    const wrapper = mount(TextInput, {
      props: {
        label: 'Veuillez préciser',
        required: true,
        modelValue: { value: '', isValid: undefined }
      }
    });

    const input = wrapper.find(textInput);
    await input.setValue('*ù');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

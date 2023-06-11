import { mount } from '@vue/test-utils';
import TextArea from '../TextArea.vue';

describe('TextArea tests', () => {
  it('should display highlighted class on label and text-area', () => {
    const wrapper = mount(TextArea, {
      props: {
        label: 'Description',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: ''
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display default class on label and focus pseudo class on text-area', async () => {
    const wrapper = mount(TextArea, {
      props: {
        label: 'Informations',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: ''
      }
    });

    const textArea = wrapper.find('textarea[type="text"]');
    await textArea.setValue('2, place Citron');

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display highlighted class on label text-area due to invalid format', async () => {
    const wrapper = mount(TextArea, {
      props: {
        label: 'Adresse complète',
        required: true,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: ''
      }
    });

    const textArea = wrapper.find('textarea[type="text"]');
    await textArea.setValue('*ù');

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display default class on label and text-area', async () => {
    const wrapper = mount(TextArea, {
      props: {
        label: 'Adresse complète',
        required: false,
        pattern: /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/,
        modelValue: ''
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});

import { mount } from '@vue/test-utils';
import LanguageDropdown from '../LanguageDropdown.vue';

const options = [
  {
    id: 0,
    text: 'Français',
    value: 'fr'
  },
  {
    id: 1,
    text: 'English',
    value: 'en'
  }
];

describe('LanguageDropdown component tests', () => {
  it('should display the default option flag icon if no option has been selected yet', () => {
    const wrapper = mount(LanguageDropdown, {
      props: {
        modelValue: 'en',
        options: options
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit a update:modelValue event if an option has been selected ', async () => {
    const wrapper = mount(LanguageDropdown, {
      props: {
        modelValue: 'fr',
        options: options
      }
    });
    const option = wrapper.find("[data-testid='option-0']");
    await option.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('update:model-value');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

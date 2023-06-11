import Icons from '../../icons/index';
import { mount } from '@vue/test-utils';
import CompletedFormButton from '../CompletedFormButton.vue';

const button = "[data-testid='button']";
const subtitle = [
  ['Phone number', 'Email address'],
  ['Address', 'Zipcode', 'City']
];

describe('CompletedFormButton tests', () => {
  it('should display the component with one subtitle', () => {
    const wrapper = mount(CompletedFormButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: [['Phone number', 'Email address']]
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with several subtitles', () => {
    const wrapper = mount(CompletedFormButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: subtitle
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should emit a click event when the button is clicked', async () => {
    const wrapper = mount(CompletedFormButton, {
      props: {
        title: 'Title',
        subtitle: subtitle
      }
    });
    await wrapper.find(button).trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('should not emit a click event when the button is clicked if the disabled prop is set to true', async () => {
    const wrapper = mount(CompletedFormButton, {
      props: {
        title: 'Title',
        subtitle: subtitle,
        disabled: true
      }
    });
    await wrapper.find(button).trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});

import Icons from '../../icons/index';
import { mount } from '@vue/test-utils';
import ButtonItem from '../ButtonItem.vue';

describe('Button item tests', () => {
  it('should display the button component of primary type with an icon and enabled by default', () => {
    const wrapper = mount(ButtonItem, {
      global: {
        plugins: [Icons]
      },
      props: {
        icon: 'ArrowForwardIOS',
        iconPosition: 'right-icon',
        text: 'Button',
        type: 'primary'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should display the button component of primary type and disabled', () => {
    const wrapper = mount(ButtonItem, {
      props: {
        text: 'Button',
        type: 'primary',
        state: 'disabled'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should display the button component of secondary type with an icon and enabled by default', () => {
    const wrapper = mount(ButtonItem, {
      global: {
        plugins: [Icons]
      },
      props: {
        icon: 'ArrowBackIOS',
        iconPosition: 'left-icon',
        text: 'Button',
        type: 'secondary'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should display the button component of primary type and disabled', () => {
    const wrapper = mount(ButtonItem, {
      props: {
        text: 'Button',
        type: 'secondary',
        state: 'disabled'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should display the button component of link type enabled by default', () => {
    const wrapper = mount(ButtonItem, {
      props: {
        text: 'Button',
        type: 'link'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should display the button component of link type and disabled', () => {
    const wrapper = mount(ButtonItem, {
      props: {
        text: 'Button',
        type: 'link',
        state: 'disabled'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should emit event when click on button', () => {
    const wrapper = mount(ButtonItem, {
      global: {
        plugins: [Icons]
      },
      props: {
        icon: 'ArrowForwardIOS',
        iconPosition: 'right-icon',
        text: 'Button',
        type: 'primary'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});

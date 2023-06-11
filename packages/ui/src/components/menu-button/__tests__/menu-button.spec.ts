import Icons from '../../icons/index';
import { mount } from '@vue/test-utils';
import MenuButton from '../MenuButton.vue';

const button = "[data-testid='button']";

describe('MenuButton tests', () => {
  it('should display the component with the default type', () => {
    const wrapper = mount(MenuButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'ArrowForwardIOS',
        type: 'default'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with the ghost type', () => {
    const wrapper = mount(MenuButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'ArrowForwardIOS',
        type: 'ghost'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with the highlighted type', () => {
    const wrapper = mount(MenuButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'ArrowForwardIOS',
        type: 'highlighted'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with the completed type', () => {
    const wrapper = mount(MenuButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'MoreVert',
        type: 'completed'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with the disabled prop set to true', () => {
    const wrapper = mount(MenuButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'MoreVert',
        type: 'completed',
        disabled: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component without the subtitle', () => {
    const wrapper = mount(MenuButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        leftIcon: 'Plus',
        rightIcon: 'ArrowForwardIOS',
        type: 'default'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit a click event when the button is clicked', async () => {
    const wrapper = mount(MenuButton, {
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'MoreVert',
        type: 'completed'
      }
    });
    await wrapper.find(button).trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('should not emit a click event when the button is clicked if the disabled prop is set to true', async () => {
    const wrapper = mount(MenuButton, {
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        rightIcon: 'MoreVert',
        type: 'completed',
        disabled: true
      }
    });
    await wrapper.find(button).trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });
});

import Icons from '../../icons/index';
import { mount } from '@vue/test-utils';
import EditDeleteButton from '../EditDeleteButton.vue';

const button = "[data-testid='button']";

describe('EditDeleteButton tests', () => {
  it('should display the component with the subtitle', () => {
    const wrapper = mount(EditDeleteButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'ArrowForwardIOS'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component without the subtitle', () => {
    const wrapper = mount(EditDeleteButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        leftIcon: 'ArrowForwardIOS'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component with the options below if the button is clicked', async () => {
    const wrapper = mount(EditDeleteButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus'
      }
    });
    await wrapper.find(button).trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display the component without the options below if the button is clicked twice', async () => {
    const wrapper = mount(EditDeleteButton, {
      global: {
        plugins: [Icons]
      },
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus'
      }
    });
    await wrapper.find(button).trigger('click');
    await wrapper.find(button).trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should emit an edit event when the edit option is clicked', async () => {
    const wrapper = mount(EditDeleteButton, {
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus'
      }
    });
    await wrapper.find(button).trigger('click');

    const editOption = "[data-testid='edit-option']";
    await wrapper.find(editOption).trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click:edit');
  });

  it('should emit a delete event when the delete option is clicked', async () => {
    const wrapper = mount(EditDeleteButton, {
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus'
      }
    });
    await wrapper.find(button).trigger('click');

    const deleteOption = "[data-testid='delete-option']";
    await wrapper.find(deleteOption).trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click:delete');
  });

  it('should not display the options below when the button is clicked if the disabled prop is set to true', async () => {
    const wrapper = mount(EditDeleteButton, {
      props: {
        title: 'Title',
        subtitle: 'Subtitle',
        leftIcon: 'Plus',
        disabled: true
      }
    });
    await wrapper.find(button).trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

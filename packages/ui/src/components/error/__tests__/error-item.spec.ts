import { mount } from '@vue/test-utils';
import ErrorItem from '../ErrorItem.vue';

describe('ErrorItem tests', () => {
  it('should display the error message', () => {
    const wrapper = mount(ErrorItem, {
      props: {
        text: 'This field is required'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not display the error message', () => {
    const wrapper = mount(ErrorItem, {
      props: {
        text: undefined
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

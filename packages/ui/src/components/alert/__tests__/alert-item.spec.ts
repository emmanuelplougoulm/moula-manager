import { mount } from '@vue/test-utils';
import AlertItem from '../AlertItem.vue';

describe('AlertItem tests', () => {
  it('should display the component with its text and colorType props', () => {
    const wrapper = mount(AlertItem, {
      props: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et penatibus eleifend vulputate condimentum tempus.',
        colorType: 'warning'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

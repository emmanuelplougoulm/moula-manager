import { mount } from '@vue/test-utils';
import LabelItem from '../LabelItem.vue';

describe('LabelItem tests', () => {
  it('should be highlighted', () => {
    const wrapper = mount(LabelItem, {
      props: {
        text: 'City of birth',
        highlighted: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not be highlighted', () => {
    const wrapper = mount(LabelItem, {
      props: {
        text: 'City of birth',
        highlighted: false
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

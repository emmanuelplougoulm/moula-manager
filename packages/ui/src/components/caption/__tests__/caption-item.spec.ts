import { mount } from '@vue/test-utils';
import CaptionItem from '../CaptionItem.vue';

describe('CaptionItem tests', () => {
  it('should display the caption text', () => {
    const wrapper = mount(CaptionItem, {
      props: {
        text: 'This is a caption'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not display the caption text', () => {
    const wrapper = mount(CaptionItem, {
      props: {
        text: undefined
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import { mount } from '@vue/test-utils';
import TooltipItem from '../TooltipItem.vue';

const mouseOverEvent = 'mouseover';
const tooltipId = "[data-testid='tooltip']";

describe('TooltipItem tests', () => {
  it('should display tooltip with a title and a description when hovering the info icon', () => {
    const wrapper = mount(TooltipItem, {
      props: {
        title: 'Questo è un titolo',
        description: 'Questa è una descrizione'
      }
    });

    wrapper.find(tooltipId).trigger(mouseOverEvent);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should not display tooltip since the object there is no title nor description passed as props', () => {
    const wrapper = mount(TooltipItem);
    wrapper.find(tooltipId).trigger(mouseOverEvent);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should display a tooltip on @mouseover and hide it on @mouseleave', () => {
    const wrapper = mount(TooltipItem, {
      props: {
        title: 'Questo è un titolo',
        description: 'Questa è una descrizione'
      }
    });

    wrapper.find(tooltipId).trigger(mouseOverEvent);
    wrapper.find(tooltipId).trigger('mouseleave');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

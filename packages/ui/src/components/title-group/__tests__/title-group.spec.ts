import { mount } from '@vue/test-utils';
import TitleGroup from '../TitleGroup.vue';

describe('TitleGroup tests', () => {
  it('should display the component with its title, subtitle, description and alert item', () => {
    const wrapper = mount(TitleGroup, {
      props: {
        title: 'Nunc sit amet consectetur ',
        subtitle: 'Nullam pellentesque felis ac faucibus vestibulum',
        description:
          'Phasellus quis justo dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        alertText:
          'Quisque non massa nunc. Ut facilisis tincidunt elit, et porta enim finibus vitae. Quisque quis faucibus nunc. Maecenas molestie nisi laoreet mi finibus imperdiet.'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

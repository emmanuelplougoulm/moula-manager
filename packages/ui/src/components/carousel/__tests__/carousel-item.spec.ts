import { mount } from '@vue/test-utils';
import CarouselItem from '../CarouselItem.vue';

describe('Carousel item tests', () => {
  it('should display 3 slides and switch images when clicking on dots', async () => {
    const wrapper = mount(CarouselItem, {
      props: {
        slides: [
          {
            svg: 'doc_checking',
            title: 'Vérifions votre association',
            description:
              'Conformément aux législations en vigueur, nous devons vérifier permettre d’utiliser nos services'
          },
          {
            svg: 'edit',
            title: 'Vos informations',
            description:
              'Conformément aux législations en vigueur, de votre association pour vous permettre d’utiliser nos services'
          },
          {
            svg: 'more_checks',
            title: 'Représentant légal',
            description:
              'Nous aurons besoin d’une pièce d’identité et de l’association pour réaliser un selfie'
          }
        ]
      }
    });
    const firstDot = wrapper.find('.dot[data-testid="dot-0"]');
    expect(firstDot.classes('active')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();

    const secondDot = wrapper.find('.dot[data-testid="dot-1"]');
    await secondDot.trigger('click');
    expect(wrapper.html()).toMatchSnapshot();

    const thirdDot = wrapper.find('.dot[data-testid="dot-2"]');
    await thirdDot.trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });
});

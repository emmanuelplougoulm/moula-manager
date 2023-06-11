import CarouselItem from '@onboarding/ui/src/components/carousel/CarouselItem.vue';

export default {
  title: 'Components/Carousel',
  component: CarouselItem,

  args: {
    slides: [
      {
        svg: 'doc_checking',
        title: 'Vérifions votre association',
        description:
          'Conformément aux législations en vigueur, nous devons vérifier les informations de votre association pour vous permettre d’utiliser nos services'
      },
      {
        svg: 'edit',
        title: 'Vos informations',
        description:
          'Conformément aux législations en vigueur, nous devons vérifier les informations de votre association pour vous permettre d’utiliser nos services'
      },
      {
        svg: 'more_checks',
        title: 'Représentant légal',
        description:
          'Nous aurons besoin d’une pièce d’identité et du sourire du représentant légal de l’association pour réaliser un selfie'
      }
    ]
  }
};

const Template = (args) => ({
  components: { CarouselItem },
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; justify-content: center; width:100%; height:550px;">
      <CarouselItem v-bind="args" />
  </div>`
});

export const Element = Template.bind({});

import LanguageDropdown from '@onboarding/ui/src/components/language-dropdown/LanguageDropdown.vue';
import { ref } from 'vue';

export default {
  title: 'Components/LanguageDropdown',
  component: LanguageDropdown,
  args: {
    options: [
      {
        id: 0,
        text: 'Français',
        value: 'fr'
      },
      {
        id: 1,
        text: 'English',
        value: 'en'
      },
      {
        id: 2,
        text: 'Deutsch',
        value: 'de'
      },
      {
        id: 3,
        text: 'Español',
        value: 'es'
      },
      {
        id: 4,
        text: 'Italiano',
        value: 'it'
      }
    ]
  }
};

const Template = (args) => ({
  components: { LanguageDropdown },
  setup() {
    const language = ref('es');
    return {
      language,
      args
    };
  },
  template: `<div style="display: flex; justify-content: flex-end; width:10.75rem;">
  <LanguageDropdown v-model="language" v-bind="args" />
  </div>`
});

export const Element = Template.bind({});

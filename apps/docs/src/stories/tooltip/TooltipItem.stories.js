import TooltipItem from '@onboarding/ui/src/components/tooltip/TooltipItem.vue';

export default {
  title: 'Components/Tooltip',
  component: TooltipItem
};

const Template = (args) => ({
  components: { TooltipItem },
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; justify-content: center; align-items: center; width:100%; height:300px;">
      <div style="display: flex; justify-content: end; align-items: end; position:relative; width:350px; height:30px;">
      <TooltipItem v-bind="args"/>
      </div>
  </div>`
});

export const Element = Template.bind({});
Element.args = {
  title: 'Questo è un titolo',
  description: 'Questa è una descrizione'
};

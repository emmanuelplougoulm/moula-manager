import LoaderItem from '@onboarding/ui/src/components/loader/LoaderItem.vue';

export default {
  title: 'Components/Loader',
  component: LoaderItem
};

const Template = () => ({
  components: { LoaderItem },
  template: '<LoaderItem />'
});

export const Element = Template.bind({});

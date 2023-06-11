<template>
  <div>
    <TitleGroup
      :title="$t('pages.validate.title')"
      :description="$t('pages.validate.description')"
    />
    <div class="buttons-container">
      <component
        :is="getComponent(button)"
        v-for="button in buttons"
        :key="button.id"
        :title="getTitle(button)"
        :subtitle="getSubtitle(button)"
        :type="getType(button)"
        :left-icon="button.leftIcon"
        right-icon="ArrowForwardIOS"
        @click="goTo(button)"
      />
    </div>
    <Footer
      :next-button-text="$t('common.actions.save')"
      :next-button-state="nextButtonState"
      :link-button-text="$t('common.actions.saveAndFinishLater')"
    />
  </div>
</template>

<script setup>
import { computed, navigateTo, reactive, useLazyFetch, useRoute, watch } from '#imports';
import TitleGroup from '@onboarding/ui/src/components/title-group/TitleGroup.vue';
import Footer from '@/components/footer/FooterItem.vue';
import MenuButton from '@onboarding/ui/src/components/menu-button/MenuButton.vue';
import CompletedFormButton from '@onboarding/ui/src/components/completed-form-button/CompletedFormButton.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({});
const route = useRoute();
const { data, pending } = await useLazyFetch(
  `http://localhost:3001/api/onboarding/${route.params.id}`,
  {
    method: 'GET'
  }
);

const buttons = reactive([
  {
    id: 1,
    title: 'common.attributes.personalInformation',
    subtitle: undefined,
    leftIcon: 'ID',
    completed: false,
    type: 'personalInformation',
    page: 'personal-information'
  },
  {
    id: 2,
    title: 'common.attributes.contactAndAddress',
    subtitle: undefined,
    leftIcon: 'Contact',
    type: 'contactAndAddress',
    completed: false
  },
  {
    id: 3,
    title: 'common.attributes.professionalSituation',
    subtitle: undefined,
    leftIcon: 'Job',
    type: 'professionalSituation',
    completed: false
  },
  {
    id: 4,
    title: 'common.attributes.incomesAndPatrimony',
    subtitle: undefined,
    leftIcon: 'Incomes',
    type: 'incomesAndPatrimony',
    completed: false
  },
  {
    id: 5,
    title: 'common.attributes.politicalExposure',
    subtitle: undefined,
    leftIcon: 'Politic',
    type: 'politicalExposure',
    completed: false
  },
  {
    id: 6,
    title: 'common.attributes.legalCapacity',
    subtitle: undefined,
    leftIcon: 'Legal',
    type: 'legalCapacity',
    completed: false,
    page: 'legal-capacity'
  }
]);

const nextButtonState = computed(() =>
  buttons.every((button) => button.completed) ? 'enabled' : 'disabled'
);

const getComponent = (option) => (option.completed ? CompletedFormButton : MenuButton);
const getTitle = (option) => t(option.title);
const getSubtitle = (option) =>
  option.completed ? option.subtitle : t('common.actions.fillInInformation');
const getType = (option) => (option.completed ? 'completed' : 'highlighted');
const goTo = (button) => {
  if (button.page && !button.completed) {
    navigateTo({ path: `/${route.params.partner}/${route.params.id}/${button.page}` });
  } else if (button.page && button.completed) {
    navigateTo({ path: `/${route.params.partner}/${route.params.id}/${button.page}/edit` });
  }
};

watch(pending, () => {
  if (!pending.value) {
    buttons.value = buttons.map((button) => {
      const buttonData = data.value[button.type];
      button.completed = buttonData?.completed;
    });
  }
});
</script>

<style scoped>
.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>

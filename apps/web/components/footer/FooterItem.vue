<template>
  <div class="container">
    <div class="page-validation-buttons">
      <ButtonItem
        icon-position="icon-only"
        icon="ArrowBackIOS"
        type="secondary"
        @click="goToPrevious()"
      />
      <ButtonItem
        :text="$t('common.actions.next')"
        :state="nextButtonState"
        icon-position="right-icon"
        icon="ArrowForwardIOS"
        @click="goToNext()"
      />
    </div>
    <ButtonItem
      :text="$t('common.actions.saveAndFinishLater')"
      type="link"
      @click="saveAndFinishLater()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useRoute, navigateTo } from '#imports';
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';

const route = useRoute();
const props = defineProps({
  enableNextButton: {
    type: Boolean,
    required: false,
    default: false
  },
  previousPage: {
    type: String,
    required: false,
    default: undefined
  },
  saveDataHandler: {
    type: Function,
    required: false,
    default: undefined
  },
  nextPage: {
    type: String,
    required: false,
    default: undefined
  }
});

const nextButtonState = computed(() => (props.enableNextButton ? 'enabled' : 'disabled'));

const goToPrevious = () => {
  if (props.previousPage) {
    navigateTo({ path: `/${route.params.partner}/${route.params.id}/${props.previousPage}` });
  }
};

const goToNext = async () => {
  if (props.saveDataHandler) {
    const { data, pending, error } = props.saveDataHandler();
    if (data && !pending && !error && props.nextPage) {
      navigateTo({ path: `/${route.params.partner}/${route.params.id}/${props.nextPage}` });
    }
  }
};

const saveAndFinishLater = () => {
  if (props.saveDataHandler) {
    props.saveDataHandler();
    navigateTo({ path: `/${route.params.partner}/${route.params.id}/finish-later-save` });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.25rem;
}
.page-validation-buttons {
  display: flex;
  justify-content: space-between;
}
</style>

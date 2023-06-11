<template>
  <div class="container">
    <div class="page-validation-buttons">
      <ButtonItem
        :text="$t('common.actions.cancel')"
        type="secondary"
        @click="goToValidate(false)"
      />
      <ButtonItem
        :text="$t('common.actions.save')"
        :state="saveButtonState"
        @click="goToValidate(true)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useRoute, navigateTo } from '#imports';
import ButtonItem from '@onboarding/ui/src/components/button/ButtonItem.vue';

const route = useRoute();
const props = defineProps({
  enableSaveButton: {
    type: Boolean,
    default: false
  },
  saveDataHandler: {
    type: Function,
    required: false,
    default: undefined
  }
});

const saveButtonState = computed(() => (props.enableSaveButton ? 'enabled' : 'disabled'));

const goToValidate = async (save: boolean) => {
  if (save && props.saveDataHandler) {
    const { data, pending, error } = props.saveDataHandler();
  }
  navigateTo({ path: `/${route.params.partner}/${route.params.id}/validate` });
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

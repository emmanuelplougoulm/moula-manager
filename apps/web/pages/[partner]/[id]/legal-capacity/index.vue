<template>
  <div>
    <TitleGroup
      :title="$t('pages.legalCapacity.title')"
      :subtitle="$t('pages.legalCapacity.subtitle')"
    />
    <LegalCapacityForm v-if="showForm" />
    <FooterItem
      :enable-next-button="completed"
      previous-page="political-exposure"
      :save-data-handler="saveDataHandler"
    />
  </div>
</template>

<script setup lang="ts">
import TitleGroup from '@onboarding/ui/src/components/title-group/TitleGroup.vue';
import FooterItem from '@/components/footer/FooterItem.vue';
import LegalCapacityForm from '@/components/forms/LegalCapacityForm.vue';
import { ref, useLazyFetch, useRoute, watch } from '#imports';
import { storeToRefs } from 'pinia';
import { useLegalCapacityStore } from '@/stores/legal-capacity-store';
import type { LegalCapacityModel } from '@/models/legal-capacity-model';
import type { PersonalInformationModel } from '@/models/personal-information-model';

const route = useRoute();
const store = useLegalCapacityStore();
const showForm = ref(false);
const { completed } = storeToRefs(store);

const [
  { data: personalInformationData, pending: personalInformationPending },
  { data: legalCapacityData, pending: legalCapacityPending }
] = await Promise.all([
  useLazyFetch(`http://localhost:3001/api/onboarding/${route.params.id}/personal-information`, {
    method: 'GET'
  }),
  useLazyFetch(`http://localhost:3001/api/onboarding/${route.params.id}/legal-capacity`, {
    method: 'GET'
  })
]);

watch(legalCapacityPending, () => {
  if (!personalInformationPending.value && !legalCapacityPending.value) {
    const personalInformationRawData = personalInformationData.value as PersonalInformationModel;
    store.isMinor(personalInformationRawData.birthDate);
    if (store.isValueValid) {
      const legalCapacityRawData = legalCapacityData.value as LegalCapacityModel;
      store.init(legalCapacityRawData);
    }
    showForm.value = true;
  }
});

const saveDataHandler = async () => {
  if (store.validateForm()) {
    const legalCapacity = {
      legalCapacity: store.legalCapacity,
      legalCapacityDescription: store.legalCapacityDescription,
      otherLegalCapacity: store.otherLegalCapacity.value,
      completed: true
    };
    await useLazyFetch(`http://localhost:3001/api/onboarding/${route.params.id}/legal-capacity`, {
      body: JSON.stringify(legalCapacity),
      method: 'PUT'
    });
  }
};
</script>

<style scoped>
.radio-groups-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>

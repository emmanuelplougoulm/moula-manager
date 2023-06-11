<template>
  <div>
    <TitleGroup
      :title="$t('pages.personalInformation.title')"
      :subtitle="$t('common.attributes.personalInformation')"
      :alert-text="$t('pages.personalInformation.alert')"
    />
    <PersonalInformationForm v-if="showForm" />
    <EditFooterItem :enable-save-button="completed" :save-data-handler="saveDataHandler" />
  </div>
</template>

<script setup lang="ts">
import { ref, useLazyFetch, useRoute, watch } from '#imports';
import { storeToRefs } from 'pinia';
import { usePersonalInformationStore } from '@/stores/personal-information-store';

import TitleGroup from '@onboarding/ui/src/components/title-group/TitleGroup.vue';
import PersonalInformationForm from '@/components/forms/PersonalInformationForm.vue';
import type { PersonalInformationModel } from '@/models/personal-information-model';
import EditFooterItem from '@/components/footer/EditFooterItem.vue';

const route = useRoute();
const store = usePersonalInformationStore();
const showForm = ref(false);
const { completed } = storeToRefs(store);

const { data, pending } = await useLazyFetch(
  `http://localhost:3001/api/onboarding/${route.params.id}/personal-information`,
  {
    method: 'GET'
  }
);

watch(pending, () => {
  if (!pending.value) {
    const rawData = data.value as PersonalInformationModel;
    store.init(rawData);
    showForm.value = true;
  }
});

const saveDataHandler = async () => {
  if (store.validateForm()) {
    const personalInformation = {
      firstName: store.firstName.value,
      otherName: store.otherName.value,
      middleName: store.middleName.value,
      lastName: store.lastName.value,
      nationalities: store.nationalities.value,
      birthDate: store.birthDate.value,
      birthCountry: store.birthCountry.value,
      birthCity: store.birthCity.value,
      completed: true
    };
    const { data } = await useLazyFetch(
      `http://localhost:3001/api/onboarding/${route.params.id}/personal-information`,
      {
        body: JSON.stringify(personalInformation),
        method: 'PUT'
      }
    );
  }
};
</script>

<style scoped>
.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>

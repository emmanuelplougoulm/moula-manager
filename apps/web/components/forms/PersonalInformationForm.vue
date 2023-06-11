<template>
  <div class="inputs-container">
    <TextInput
      v-model="lastName"
      :label="$t('pages.personalInformation.labels.lastName')"
      :required="true"
      :pattern="pattern"
    />
    <TextInput
      v-model="otherName"
      :label="$t('pages.personalInformation.labels.otherName')"
      :required="false"
      :pattern="pattern"
      :caption="$t('pages.personalInformation.labels.otherNameCaption')"
    />
    <TextInput
      v-model="firstName"
      :label="$t('pages.personalInformation.labels.firstName')"
      :required="true"
      :pattern="pattern"
    />
    <TextInput
      v-model="middleName"
      :label="$t('pages.personalInformation.labels.middleName')"
      :required="false"
      :pattern="pattern"
      :caption="$t('pages.personalInformation.labels.middleNameCaption')"
    />
    <TextInput
      v-model="nationalities"
      :label="$t('pages.personalInformation.labels.nationality')"
      :required="true"
      :pattern="pattern"
    />
    <DateInput
      v-model="birthDate"
      :label="$t('pages.personalInformation.labels.birthDate')"
      :required="true"
    />
    <TextInput
      v-model="birthCountry"
      :label="$t('pages.personalInformation.labels.birthCountry')"
      :required="true"
      :pattern="pattern"
    />
    <TextInput
      v-model="birthCity"
      :label="$t('pages.personalInformation.labels.birthCity')"
      :required="true"
      :pattern="pattern"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePersonalInformationStore } from '@/stores/personal-information-store';
import TextInput from '@onboarding/ui/src/components/text-input/TextInput.vue';
import DateInput from '@onboarding/ui/src/components/date-input/DateInput.vue';

const pattern = /^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/;
const store = usePersonalInformationStore();
const {
  firstName,
  otherName,
  middleName,
  lastName,
  nationalities,
  birthDate,
  birthCountry,
  birthCity
} = storeToRefs(store);

store.$subscribe(() => {
  store.validateForm();
});
</script>

<style scoped>
.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>

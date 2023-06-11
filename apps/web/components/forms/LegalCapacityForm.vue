<template>
  <div class="radio-groups-container">
    <RadioGroup
      v-model="legalCapacity"
      name="legalCapacity"
      :label="$t('pages.legalCapacity.labels.iAm')"
      :options="legalCapacityOptions"
    />
    <RadioGroup
      v-if="store.isProtectedAdult"
      v-model="legalCapacityDescription"
      name="legalCapacityDescription"
      :label="$t('pages.legalCapacity.labels.specifyLegalCapacity')"
      :options="legalCapacityDescriptionOptions"
    />
    <TextInput
      v-if="store.hasOtherLegalCapacity"
      v-model="otherLegalCapacity"
      :label="$t('pages.legalCapacity.labels.specify')"
      :required="true"
    />
  </div>
</template>

<script setup>
import { computed } from '#imports';
import { storeToRefs } from 'pinia';
import { useLegalCapacityStore } from '@/stores/legal-capacity-store';
import TextInput from '@onboarding/ui/src/components/text-input/TextInput.vue';
import RadioGroup from '@onboarding/ui/src/components/radio-group/RadioGroup.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useLegalCapacityStore();
const { legalCapacity, legalCapacityDescription, otherLegalCapacity } = storeToRefs(store);

store.$subscribe(() => {
  store.validateForm();
});

const minorLegalCapacityOptions = computed(() => [
  {
    id: 0,
    text: t('pages.legalCapacity.radioGroupOptions.minorEmancipated'),
    value: 'Minor emancipated',
    disabled: false
  },
  {
    id: 1,
    text: t('pages.legalCapacity.radioGroupOptions.minorNotEmancipated'),
    value: 'Minor not emancipated',
    disabled: false
  }
]);

const adultLegalCapacityOptions = computed(() => [
  {
    id: 0,
    text: t('pages.legalCapacity.radioGroupOptions.legalAgeAndCapacity'),
    value: 'Legal age and capacity',
    disabled: false
  },
  {
    id: 1,
    text: t('pages.legalCapacity.radioGroupOptions.protectedAdult'),
    value: 'Protected adult',
    disabled: false
  }
]);

const legalCapacityOptions = store.minor ? minorLegalCapacityOptions : adultLegalCapacityOptions;

const legalCapacityDescriptionOptions = computed(() => [
  {
    id: 0,
    text: t('pages.legalCapacity.radioGroupOptions.safeguardingOfJustice'),
    value: 'Safe guarding of justice',
    disabled: false
  },
  {
    id: 1,
    text: t('pages.legalCapacity.radioGroupOptions.curatorship'),
    value: 'Curatorship',
    disabled: false
  },
  {
    id: 2,
    text: t('pages.legalCapacity.radioGroupOptions.guardianship'),
    value: 'Guardianship',
    disabled: false
  },
  {
    id: 3,
    text: t('pages.legalCapacity.radioGroupOptions.other'),
    value: 'Other',
    disabled: false
  }
]);
</script>

<style scoped>
.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>

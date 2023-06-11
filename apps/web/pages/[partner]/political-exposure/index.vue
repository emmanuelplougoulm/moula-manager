<template>
  <div>
    <TitleGroup
      :title="t('pages.politicalExposure.title')"
      :subtitle="t('pages.politicalExposure.subtitle')"
    />
    <div class="inputs-container">
      <RadioGroup
        :label="t('pages.politicalExposure.form.status.label')"
        name="status"
        :options="statusOptions"
        :tooltip-title="t('pages.politicalExposure.form.status.tooltipTitle')"
        :tooltip-description="t('pages.politicalExposure.form.status.tooltipDescription')"
      />
      <TextInput
        v-model="pepFullNameValue"
        :label="t('pages.politicalExposure.form.pepFullName.label')"
        :pattern="pepFullNamePattern"
        :required="true"
      />
      <DropdownItem
        v-model="positionValue"
        :label="t('pages.politicalExposure.form.position.label')"
        :options="positionOptions"
        :placeholder="t('pages.politicalExposure.form.position.placeholder')"
      />
      <client-only>
        <div class="date-pickers-container">
          <DatePicker
            v-model="startDateValue"
            :required="true"
            :label="t('pages.politicalExposure.form.startDate.label')"
            :lang="locale"
          />
          <DatePicker
            v-model="endDateValue"
            :label="t('pages.politicalExposure.form.endDate.label')"
            :lang="locale"
            :caption="t('pages.politicalExposure.form.endDate.caption')"
          />
        </div>
      </client-only>
      <RadioGroup
        :label="t('pages.politicalExposure.form.closeRelationship.label')"
        name="closeRelationship"
        :options="closeRelationshipOptions"
      />
    </div>
    <FooterItem
      :next-button-text="t('common.actions.next')"
      next-button-state="enabled"
      :link-button-text="t('common.actions.saveAndFinishLater')"
    />
  </div>
</template>

<script setup>
import { computed, ref } from '#imports';
import TitleGroup from '@onboarding/ui/src/components/title-group/TitleGroup.vue';
import FooterItem from '@/components/footer/FooterItem.vue';
import RadioGroup from '@onboarding/ui/src/components/radio-group/RadioGroup.vue';
import TextInput from '@onboarding/ui/src/components/text-input/TextInput.vue';
import DropdownItem from '@onboarding/ui/src/components/dropdown/DropdownItem.vue';
import DatePicker from '@onboarding/ui/src/components/date-picker/DatePicker.vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({});

const statusOptions = computed(() => [
  {
    id: 0,
    text: t('pages.politicalExposure.form.status.options.one'),
    value: 'status-option-1',
    disabled: false
  },
  {
    id: 1,
    text: t('pages.politicalExposure.form.status.options.two'),
    value: 'status-option-2',
    disabled: false
  },
  {
    id: 2,
    text: t('pages.politicalExposure.form.status.options.three'),
    value: 'status-option-3',
    disabled: false
  }
]);

const pepFullNameValue = ref('');
const pepFullNamePattern = new RegExp(/^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/);

const positionValue = ref({});
const positionOptions = computed(() => [
  {
    id: 1,
    text: t('pages.politicalExposure.form.position.options.one'),
    value: 'position-option-1'
  },
  {
    id: 2,
    text: t('pages.politicalExposure.form.position.options.two'),
    value: 'position-option-2'
  },
  {
    id: 3,
    text: t('pages.politicalExposure.form.position.options.three'),
    value: 'position-option-3'
  },
  {
    id: 4,
    text: t('pages.politicalExposure.form.position.options.four'),
    value: 'position-option-4'
  },
  {
    id: 5,
    text: t('pages.politicalExposure.form.position.options.five'),
    value: 'position-option-5'
  },
  {
    id: 6,
    text: t('pages.politicalExposure.form.position.options.six'),
    value: 'position-option-6'
  },
  {
    id: 7,
    text: t('pages.politicalExposure.form.position.options.seven'),
    value: 'position-option-7'
  },
  {
    id: 8,
    text: t('pages.politicalExposure.form.position.options.eight'),
    value: 'position-option-8'
  },
  {
    id: 9,
    text: t('pages.politicalExposure.form.position.options.nine'),
    value: 'position-option-9'
  },
  {
    id: 10,
    text: t('pages.politicalExposure.form.position.options.ten'),
    value: 'position-option-10'
  }
]);

const startDateValue = ref('');

const endDateValue = ref('');

const closeRelationshipOptions = computed(() => [
  {
    id: 0,
    text: t('pages.politicalExposure.form.closeRelationship.options.one'),
    value: 'relationship-option-1',
    disabled: false
  },
  {
    id: 1,
    text: t('pages.politicalExposure.form.closeRelationship.options.two'),
    value: 'relationship-option-2',
    disabled: false
  },
  {
    id: 2,
    text: t('pages.politicalExposure.form.closeRelationship.options.three'),
    value: 'relationship-option-3',
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

.date-pickers-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.25rem;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .date-pickers-container {
    justify-content: flex-start;
  }
}
</style>

<template>
  <div class="container-page">
    <TitleGroup
      :title="t('pages.incomeWealthInformation.title')"
      :subtitle="t('pages.incomeWealthInformation.subtitle')"
    />
    <div class="container-dropdowns">
      <DropdownItem
        ref="target"
        v-model="incomeValue"
        :options="incomeOptions"
        :placeholder="t('common.actions.selectFromList')"
        :label="t('pages.incomeWealthInformation.labels.income')"
        :tooltip-title="t('pages.incomeWealthInformation.tooltips.income.title')"
        :tooltip-description="t('pages.incomeWealthInformation.tooltips.income.description')"
      />
      <DropdownItem
        ref="wealthRef"
        v-model="wealthValue"
        :options="wealthOptions"
        :placeholder="t('common.actions.selectFromList')"
        :label="t('pages.incomeWealthInformation.labels.wealth')"
        :tooltip-title="t('pages.incomeWealthInformation.tooltips.wealth.title')"
        :tooltip-description="t('pages.incomeWealthInformation.tooltips.wealth.description')"
      />
      <CheckboxItem :text="t('pages.incomeWealthInformation.checkboxText')" :required="false" />
      <TextInput
        v-model="textInput"
        :label="t('pages.incomeWealthInformation.labels.taxCode')"
        :required="true"
        :pattern="/^([ \w]{1,128})(?![^?!§&#{[@\]}=+])/"
      />
    </div>
    <FooterItem
      :next-button-text="t('common.actions.next')"
      :next-button-state="'enabled'"
      :link-button-text="t('common.actions.saveAndFinishLater')"
    />
  </div>
</template>

<script setup lang="ts">
import TitleGroup from '@onboarding/ui/src/components/title-group/TitleGroup.vue';
import DropdownItem from '@onboarding/ui/src/components/dropdown/DropdownItem.vue';
import CheckboxItem from '@onboarding/ui/src/components/checkbox/CheckboxItem.vue';
import TextInput from '@onboarding/ui/src/components/text-input/TextInput.vue';
import FooterItem from '@/components/footer/FooterItem.vue';
import { useI18n } from '#imports';
import { ref, computed, onMounted  } from 'vue';
// import useDetectOutsideClick from '../../../composables/useDetectOutsideClick';
import { onClickOutside } from '@vueuse/core'


const { t } = useI18n();
const textInput = ref('');

const incomeRef = ref(null);
const wealthRef = ref(null);

const target = ref(null)
onClickOutside(target, (event) => console.log('outside'))

// onMounted(()=>{
//   if (target.value) onClickOutside(target, (event) => target.value.closeModal())

// })






//  onMounted(() => {
  // if (incomeRef.value) useDetectOutsideClick(incomeRef, incomeRef.value.closeModal())
  // if (incomeRef.value) incomeRef.value.closeModal() 
  //  useDetectOutsideClick(incomeRef, incomeRef?.value.closeModal())



  // console.log('incomeRef',incomeRef.value.closeModal())
  // console.log('incomeRef',incomeRef.value.closeModal())
//  })


//  useDetectOutsideClick(incomeRef?.value, incomeRef?.value.closeModal())

// incomeRef.value.closeModal()

// function toto(){
// incomeRef.value.closeModal
// }



// onMounted(()=>{
//   incomeRef.value.closeModal()
// })


//  console.log('incomeRef',incomeRef.value.closemodal())



const incomeValue = ref({});
const INCOME_OPTIONS = [
  {
    id: 1,
    text: '< 10K€',
    value: '< 10K€'
  },
  {
    id: 2,
    text: '10K€ - 25K€ ',
    value: '10K€ - 25K€ '
  },
  {
    id: 3,
    text: '26K€ - 50K€',
    value: '26K€ - 50K€'
  },
  {
    id: 4,
    text: '51K€ - 75K€',
    value: '51K€ - 75K€'
  },
  {
    id: 5,
    text: '76K€ - 100K€',
    value: '76K€ - 100K€'
  },
  {
    id: 6,
    text: '> 100K€',
    value: '> 100K€'
  },
];
const incomeOptions = computed(() => INCOME_OPTIONS );

const wealthValue = ref({});
const WEALTH_OPTIONS = [
  {
    id: 1,
    text: '< 50K€',
    value: '< 50K€'
  },
  {
    id: 2,
    text: '51K€ - 100K€',
    value: '51K€ - 100K€'
  },
  {
    id: 3,
    text: '101K€ - 150K€',
    value: '101K€ - 150K€'
  },
  {
    id: 4,
    text: '151K€ - 200K€',
    value: '151K€ - 200K€'
  },
  {
    id: 5,
    text: '201K€ - 500K€',
    value: '201K€ - 500K€'
  },
  {
    id: 6,
    text: '501K€ - 1M€',
    value: '501K€ - 1M€'
  },
  {
    id: 7,
    text: '1M€',
    value: '1M€'
  },
];
const wealthOptions = computed(() => WEALTH_OPTIONS );
</script>

<style scoped>
.container-page {
  display: flex;
  flex-direction: column;
}
.container-dropdowns {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
}
.title {
  text-align: center;
  line-height: 1.8rem;
  color: var(--neutral-0);
}
.checkbox {
  color: var(--neutral-20);
}
.illustration {
  display: flex;
  justify-content: center;
  height: 20.625rem;
  width: 100%;
}
.description {
  text-align: center;
  line-height: 1.5rem;
  color: var(--neutral-40);
}
</style>

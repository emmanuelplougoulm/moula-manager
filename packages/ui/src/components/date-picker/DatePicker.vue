<template>
  <div class="date-picker-container">
    <LabelItem
      :text="label"
      :highlighted="isHighlighted"
      :tooltip-title="tooltipTitle"
      :tooltip-description="tooltipDescription"
    />
    <DatePicker
      v-model:value="selectedValue"
      format="DD/MM/YYYY"
      value-type="format"
      :lang="lang"
      :editable="false"
      data-testid="date-picker"
      @change="onChange"
      @open="onOpen"
      @close="onClose"
      @click="onClick"
    >
      <template #icon-calendar>
        <CalendarToday />
      </template>
    </DatePicker>
    <CaptionItem :text="caption" />
    <ErrorItem :text="error" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ErrorItem from '../error/ErrorItem.vue';
import CaptionItem from '../caption/CaptionItem.vue';
import LabelItem from '../label/LabelItem.vue';
import CalendarToday from '@material-symbols/svg-600/outlined/calendar_today-fill.svg?component';
import { getErrorText } from '../../utils/commons';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/fr.es';
import 'vue-datepicker-next/locale/en.es';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  tooltipTitle: {
    type: String,
    default: undefined
  },
  tooltipDescription: {
    type: String,
    default: undefined
  },
  required: {
    type: Boolean,
    default: false
  },
  lang: {
    type: String,
    required: true
  },
  errorText: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: undefined
  }
});

const selectedValue = ref(props.modelValue);
const error = ref(props.errorText);
const opened = ref(false);
const clicked = ref(false);

const isHighlighted = computed(() => {
  return !selectedValue.value && props.required && !clicked.value;
});
const border = computed(() => (isHighlighted.value ? '0.125rem solid var(--primary-30)' : 'none'));
const backgroundColor = computed(() =>
  isHighlighted.value ? 'var(--primary-90)' : 'var(--neutral-80)'
);
const textColor = computed(() => (isHighlighted.value ? 'var(--primary-30)' : 'var(--neutral-20)'));
const svgColor = computed(() => {
  if (opened.value || !isHighlighted.value) {
    return 'var(--neutral-40)';
  } else {
    return 'var(--primary-30)';
  }
});

const emit = defineEmits(['update:modelValue']);
const onChange = (value: any): void => {
  if (value) {
    error.value = '';
    emit('update:modelValue', value);
  } else {
    value = '';
    error.value = getErrorText(props.required, value);
  }
};

const onOpen = () => {
  opened.value = true;
};
const onClick = () => {
  clicked.value = true;
};
const onClose = () => {
  opened.value = false;
  clicked.value = false;
};
</script>

<style>
:is(.mx-input, .mx-input:hover) {
  border: v-bind(border);
}

:is(.mx-icon-calendar svg, .mx-icon-clear svg) {
  color: v-bind(svgColor);
}

.date-picker-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 10.3125rem;
}

.mx-datepicker {
  width: 10.3125rem;
}

.mx-input {
  font-size: 1.125rem;
  height: 3rem;
  padding-left: 1rem;
  border-radius: 0.25rem;
  color: v-bind(textColor);
  background-color: v-bind(backgroundColor);
  box-shadow: none;
}

.mx-input:focus-visible,
.mx-icon-clear svg:focus-visible {
  background-color: var(--neutral-70);
  border: none;
  color: var(--neutral-10);
}

.mx-calendar-content .cell.active {
  background-color: var(--primary-30);
}

.mx-btn-text:hover,
.mx-table-date .today,
.mx-table-date .today:hover {
  color: var(--primary-30);
}

.mx-icon-calendar,
.mx-icon-clear {
  right: 1rem;
}

.mx-icon-calendar svg,
.mx-icon-clear svg {
  width: 1.6rem;
  height: 1.6rem;
}
</style>

import { LegalCapacityModel } from '@/models/legal-capacity-model';
import dayjs from 'dayjs';

export const useLegalCapacityStore = defineStore('legal-capacity', {
  state: () => ({
    legalCapacity: '',
    legalCapacityDescription: '',
    otherLegalCapacity: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    completed: false,
    minor: false
  }),

  getters: {
    isProtectedAdult(): boolean {
      return this.legalCapacity === 'Protected adult';
    },

    hasOtherLegalCapacity(): boolean {
      return this.isProtectedAdult && this.legalCapacityDescription === 'Other';
    },

    isValueValid(): boolean {
      if (this.minor) {
        return this.legalCapacity.includes('Minor');
      } else {
        return !this.legalCapacity.includes('Minor');
      }
    }
  },
  actions: {
    init(initialState: LegalCapacityModel) {
      this.legalCapacity = initialState.legalCapacity;
      this.legalCapacityDescription = initialState.legalCapacityDescription;
      this.otherLegalCapacity.value = initialState.otherLegalCapacity;
      this.otherLegalCapacity.isValid = !!initialState.otherLegalCapacity;
      this.completed = initialState.completed;
    },

    isMinor(date: string) {
      const birthDate = dayjs(date, 'DD/MM/YYYY');
      const currentDate = dayjs();
      this.minor = currentDate.diff(birthDate, 'years', true) < 18;
    },

    validateForm() {
      if (this.isProtectedAdult && this.hasOtherLegalCapacity) {
        this.completed =
          !!this.legalCapacity &&
          !!this.legalCapacityDescription &&
          !!this.otherLegalCapacity.isValid;
      } else if (this.isProtectedAdult && !this.hasOtherLegalCapacity) {
        this.otherLegalCapacity.value = '';
        this.completed = !!this.legalCapacity && !!this.legalCapacityDescription;
      } else {
        this.legalCapacityDescription = '';
        this.otherLegalCapacity.value = '';
        this.completed = !!this.legalCapacity;
      }
      return this.completed;
    }
  }
});

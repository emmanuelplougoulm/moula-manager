import { PersonalInformationModel } from '@/models/personal-information-model';

export const usePersonalInformationStore = defineStore('personal-information', {
  state: () => ({
    firstName: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    otherName: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    lastName: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    middleName: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    nationalities: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    birthDate: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    birthCountry: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    birthCity: {
      value: '',
      isValid: undefined as boolean | undefined
    },
    completed: false
  }),
  actions: {
    init(initialState: PersonalInformationModel) {
      this.firstName.value = initialState.firstName;
      this.firstName.isValid = !!initialState.firstName;
      this.otherName.value = initialState.otherName;
      this.lastName.value = initialState.lastName;
      this.lastName.isValid = !!initialState.lastName;
      this.middleName.value = initialState.middleName;
      this.nationalities.value = initialState.nationalities;
      this.nationalities.isValid = !!initialState.nationalities;
      this.birthDate.value = initialState.birthDate;
      this.birthDate.isValid = !!initialState.birthDate;
      this.birthCountry.value = initialState.birthCountry;
      this.birthCountry.isValid = !!initialState.birthCountry;
      this.birthCity.value = initialState.birthCity;
      this.birthCity.isValid = !!initialState.birthCity;
      this.completed = initialState.completed;
    },

    validateForm() {
      this.completed = (this.firstName.isValid &&
        this.lastName.isValid &&
        this.nationalities.isValid &&
        this.birthDate.isValid &&
        this.birthCountry.isValid &&
        this.birthCity.isValid) as boolean;

      return this.completed;
    }
  }
});

import { rest } from 'msw';

export const validateHandlers = [
  // Handles a GET /user request
  rest.get('http://localhost:3001/api/onboarding/:onboardingId', (req, res, ctx) => {
    const { onboardingId } = req.params;
    if (window !== undefined && window.localStorage) {
      const personalInformationItem = window.localStorage.getItem(
        `${onboardingId}-personal-information`
      );
      const personalInformation = personalInformationItem
        ? JSON.parse(personalInformationItem)
        : {
            firstName: '',
            otherName: '',
            lastName: '',
            middleName: '',
            nationalities: '',
            birthDate: '',
            birthCountry: '',
            birthCity: '',
            completed: false
          };

      const legalCapacityItem = window.localStorage.getItem(`${onboardingId}-legal-capacity`);
      const legalCapacity = legalCapacityItem
        ? JSON.parse(legalCapacityItem)
        : {
            legalCapacity: '',
            legalCapacityDescription: '',
            otherLegalCapacity: '',
            completed: false
          };

      return res(ctx.status(200), ctx.json({ personalInformation, legalCapacity }));
    }
  })
];

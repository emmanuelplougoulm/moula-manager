import { rest } from 'msw';

export const personalInformationHandlers = [
  // Handles a GET /user request
  rest.get(
    'http://localhost:3001/api/onboarding/:onboardingId/personal-information',
    (req, res, ctx) => {
      const { onboardingId } = req.params;

      if (window !== undefined && window.localStorage) {
        const item = window.localStorage.getItem(`${onboardingId}-personal-information`);
        const data = item
          ? JSON.parse(item)
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

        return res(ctx.status(200), ctx.json(data));
      }
    }
  ),
  rest.put(
    'http://localhost:3001/api/onboarding/:onboardingId/personal-information',
    async (req, res, ctx) => {
      const { onboardingId } = req.params;
      const data = await req.json();
      if (window !== undefined && window.localStorage) {
        window.localStorage.setItem(`${onboardingId}-personal-information`, JSON.stringify(data));
      }
      return res(
        ctx.status(201),
        ctx.json({
          data,
          completed: true
        })
      );
    }
  ),
  rest.put(
    'http://localhost:3001/api/onboarding/1234-fr-edit/personal-information',
    (req, res, ctx) => {
      req.params.firstName;
      return res(
        ctx.status(201),
        ctx.json({
          firstName: req.params.firstName,
          lastName: 'poulet',
          countryOfResidence: 'FR',

          completed: true
        })
      );
    }
  )
];

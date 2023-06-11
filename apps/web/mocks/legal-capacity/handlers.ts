import { rest } from 'msw';

export const legalCapacityHandlers = [
  rest.get('http://localhost:3001/api/onboarding/:onboardingId/legal-capacity', (req, res, ctx) => {
    const { onboardingId } = req.params;

    if (window !== undefined && window.localStorage) {
      const item = window.localStorage.getItem(`${onboardingId}-legal-capacity`);
      const data = item
        ? JSON.parse(item)
        : {
            legalCapacity: '',
            legalCapacityDescription: '',
            otherLegalCapacity: '',
            completed: false
          };

      return res(ctx.status(200), ctx.json(data));
    }
  }),
  rest.put(
    'http://localhost:3001/api/onboarding/:onboardingId/legal-capacity',
    async (req, res, ctx) => {
      const { onboardingId } = req.params;
      const data = await req.json();
      if (window !== undefined && window.localStorage) {
        window.localStorage.setItem(`${onboardingId}-legal-capacity`, JSON.stringify(data));
      }
      return res(
        ctx.status(201),
        ctx.json({
          data,
          completed: true
        })
      );
    }
  )
];

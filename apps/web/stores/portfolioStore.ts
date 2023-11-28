import type { IPortfolio } from '@/types/index';

export const usePortfolioStore = defineStore('portfolio', {
    state: () => ({
        all: [] as IPortfolio[],
        active: {} as IPortfolio,
    }),
    actions: {
        async setPortfolios(array: Array<object>) {
            this.all = array;
        },
        async setActivePortfolio(portfolio: object) {
            this.active = portfolio;
        },
        isActive(id: string): boolean {
            return this.active.portfolioId === id;
        }
    }
})

// import type { ITransaction } from '@/types/index';

export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        type: '',
        portfolioId: '',
        transactionId: '',
        date: '',
        currency: '',
        coin: {
            value: '$BTC',
            text: 'Bitcoin',
        },
        quantity: 0,
        price: 0,
        fees: 0,
    }),
})

export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        type: '',
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
import { ITransaction } from '../types/index'

export function formatTransactionsByAssets(transactions: Array<ITransaction>): ITransaction[][] {
    const symbols = [...new Set(transactions.map(item => item.symbol))]

    return symbols.map((symbol) => {
        return transactions.filter(transaction => transaction.symbol === symbol)
    })
}

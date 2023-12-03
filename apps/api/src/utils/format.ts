import { ITransaction } from '../types/index'

export function formatTransactionsByAssets(transactions: Array<ITransaction>): ITransaction[][] {
    const assetList = [...new Set(transactions.map(item => item.asset))]

    return assetList.map((asset) => {
        return transactions.filter(transaction => transaction.asset === asset)
    })
}

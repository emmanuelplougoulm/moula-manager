export interface IPortfolio {
    portfolioName: string,
    portfolioId: string,
    timeCreated: string,
    timeUpdated: string,
    assets: Array<object>
}

export interface ITransaction {
    type: string,
    portfolioId: string,
    transactionId: string,
    date: string,
    currency: string,
    symbol: string,
    quantity: number,
    price: number,
    fees: number,
}
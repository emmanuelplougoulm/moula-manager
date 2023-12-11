export interface ITransaction {
    __v?: number;
    _id?: string;
    amount: number;
    asset: string;
    currency: string;
    date: string;
    fees: number;
    portfolioId: string;
    price: number;
    transactionId: string;
    type: string;
}



export const calculateTokenHoldings = (transactionsArray: Array<ITransaction>) => {
    let sum = 0;
    transactionsArray.forEach((element) => {
        return element.type === 'BUY' ? sum = sum + element.amount : sum = sum - element.amount
    });

    return sum;
};

export const calculateAvgBuyPrice = (transactionsArray: Array<ITransaction>) => {
    let price = 0;
    let count = 0;

    transactionsArray.forEach((element) => {
        if (element.type === 'BUY') {
            price = price + element.price;
            count++;
        } else return;
    });
    const avg = price / count;
    return avg.toFixed(3);
};
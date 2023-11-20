import { Injectable } from '@nestjs/common';
import Transaction from '../models/transaction';

@Injectable()
export class TransactionService {
    async getAllTransactions(): Promise<any> {
        try {
            const transactions = await Transaction.find()
            console.log('transactions', transactions)
            return { result: { transactions } }
        } catch (err) {
            console.log('err', err)
            throw err
        }
    }
    async createOneTransaction(transactionData: any): Promise<object> {
        try {
            const transaction = await new Transaction(transactionData).save();
            return { result: { transactionId: transaction['transactionId'] } };
        } catch (err) {
            console.log('err', err)
            throw err
        }
    }
}
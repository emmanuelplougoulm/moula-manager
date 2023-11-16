import { Injectable } from '@nestjs/common';
import Transaction from '../models/transaction';

@Injectable()
export class TransactionService {
    async createOneTransaction(transactionData: any): Promise<object> {
        try {
            // console.log('transactionData', transactionData)
            const transaction = await new Transaction(transactionData).save();
            // console.log('transaction', transaction)
            return { result: { transactionId: transaction['transactionId'] } };
        } catch {

        }
    }
}
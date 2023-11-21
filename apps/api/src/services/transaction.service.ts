import { Injectable } from '@nestjs/common';
import Transaction from '../models/transaction';

@Injectable()
export class TransactionService {
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
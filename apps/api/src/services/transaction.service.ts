// import { Injectable, BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import Transaction from '../models/transaction';
import { ITransaction } from 'src/types/index';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class TransactionService {
    async createOneTransaction(transactionData: ITransaction): Promise<object> {
        try {
            const { portfolioId, date, currency, symbol, quantity, fees, price } = transactionData;

            // This is not relevant, figure out how to check for existing transaction
            // const existingTransaction = await Transaction.findOne({ transactionId })
            // if (existingTransaction) throw new BadRequestException('Transaction already exists')

            const transactionId = uuidv4();

            const newTransaction = await new Transaction({
                portfolioId,
                transactionId,
                date,
                currency,
                symbol,
                quantity,
                fees,
                price
            }).save();
            return { result: { transactionId: newTransaction['transactionId'] } }


            // const transaction = await new Transaction(transactionData).save();
            // return { result: { transactionId: transaction['transactionId'] } };
        } catch (err) {
            console.log('err', err)
            throw err
        }
    }
}
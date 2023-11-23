/* eslint-disable max-lines-per-function */
import { Controller, Get, Post, Body } from '@nestjs/common';
// import * as val from './validation';
// import Transaction from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { ITransaction } from 'src/types/index';


@Controller('transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }
    // @Get()
    // async getTransactions(): Promise<any> {
    //     try {
    //         return this.transactionService.getAllTransactions()
    //     } catch (err) {
    //         // implement an errorHandler here
    //         return err;
    //     }
    // }

    @Post()
    async createTransaction(@Body() transactionData: ITransaction): Promise<object> {
        try {
            this.transactionService.createOneTransaction(transactionData)
        } catch (err) {
            // implement an errorHandler here
            return err;
        }
    }
}
// export class TransactionController {
//   constructor(private readonly transactionRepository: TransactionRepository) { }

//   @Post()
//   async createOneTransaction(payload: val.CreateTransaction) {
//     try {
//       // const { input, metadata} = payload;
//       const { input } = payload;

//       // const existingTransaction = await getExistingTransaction(input);

//       // if(existingTransaction)return { result: {transactionId: existingTransaction.transactionId}}

//       const transaction =
//         await this.transactionRepository.createOneTransaction(input);

//       return { result: { transactionId: transaction['transactionId'] } };
//     } catch (err) {
//       // implement an errorHandler here
//       return err;
//     }
//   }
// }

// This is the old version USING micro-services

// export class TransactionController {
//   // should I add one ?

//   constructor(private readonly transactionRepository: TransactionRepository) { }

//   @MessagePattern({ action: 'asked-for.create-one-individual' })
//   async createOneTransaction(payload: val.CreateTransaction) {
//     try {
//       // const { input, metadata} = payload;
//       const { input } = payload;

//       // const existingTransaction = await getExistingTransaction(input);

//       // if(existingTransaction)return { result: {transactionId: existingTransaction.transactionId}}

//       const transaction =
//         await this.transactionRepository.createOneTransaction(input);

//       return { result: { transactionId: transaction['transactionId'] } };
//     } catch (err) {
//       // implement an errorHandler here
//       return err;
//     }
//   }
// }

/* eslint-disable max-lines-per-function */
import { Controller, Get, Post, Body } from '@nestjs/common';
// import { EventPattern, MessagePattern } from '@nestjs/microservices';
// import { MessagePattern } from '@nestjs/microservices';
// import * as val from './validation';
// import { TransactionRepository } from 'src/repositories/transaction';
import Transaction from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import transaction from '../../models/transaction';



@Controller('transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }
    @Get()
    findAll(): string {
        return 'This action returns all transactions';
    }

    @Post()
    async createTransaction(@Body() transactionData: any): Promise<any> {
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

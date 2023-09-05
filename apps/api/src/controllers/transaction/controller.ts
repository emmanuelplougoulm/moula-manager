/* eslint-disable max-lines-per-function */
import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import * as val from './validation';
import { TransactionRepository } from 'src/repositories/transaction';

@Controller()
export class TransactionController {
  // should I add one ?

  constructor(private readonly transactionRepository: TransactionRepository) {}

  @MessagePattern({ action: 'asked-for.create-one-individual' })
  async createOneTransaction(payload: val.CreateTransaction) {
    try {
      // const { input, metadata} = payload;
      const { input } = payload;

      // const existingTransaction = await getExistingTransaction(input);

      // if(existingTransaction)return { result: {transactionId: existingTransaction.transactionId}}

      const transaction =
        await this.transactionRepository.createOneTransaction(input);

      return { result: { transactionId: transaction['transactionId'] } };
    } catch (err) {
      // implement an errorHandler here
      return err;
    }
  }
}

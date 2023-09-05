// this is suppose to contain the interactions with DB
import { Injectable } from '@nestjs/common';
import Transaction from '../models/transaction';
@Injectable()
export class TransactionRepository {
  createOneTransaction(transaction) {
    return new Transaction(transaction).save();
  }
}

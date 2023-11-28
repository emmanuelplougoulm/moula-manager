// transaction.module.ts

import { Module } from '@nestjs/common';
import { TransactionController } from '../controllers/transactions/transactions.controller';
import { TransactionService } from '../services/transaction.service';

@Module({
    controllers: [TransactionController],
    providers: [TransactionService],
    exports: [TransactionService],
})
export class TransactionModule { }

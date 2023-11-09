// transaction.module.ts

import { Module } from '@nestjs/common';
import { TransactionController } from '../controllers/transaction/transaction.controller';
import { TransactionService } from '../services/transaction.service';

@Module({
    controllers: [TransactionController],
    providers: [TransactionService],
})
export class TransactionModule { }

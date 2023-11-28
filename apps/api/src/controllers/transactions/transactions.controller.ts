/* eslint-disable max-lines-per-function */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import * as val from './validation';
// import Transaction from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';
import { ITransaction } from 'src/types/index';


@Controller('transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }
    @Post()
    async createTransaction(@Body() transactionData: ITransaction): Promise<object> {
        try {
            this.transactionService.createOneTransaction(transactionData)
        } catch (err) {
            // implement an errorHandler here
            return err;
        }
    }
    @Get('/:portfolioId')
    async getOnePortfolioTransactions(@Param('portfolioId') portfolioId: string): Promise<any> {
        try {
            return this.transactionService.getOnePortfolioTransactions(portfolioId)
        } catch (err) {
            // implement an errorHandler here
            return err;
        }
    }
}

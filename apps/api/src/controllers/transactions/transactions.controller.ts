/* eslint-disable max-lines-per-function */
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TransactionService } from '../../services/transaction.service';
import * as val from './validation';

@Controller('transactions')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }
    @Post()
    async createTransaction(@Body() payload: val.createTransaction): Promise<object> {
        try {
            const { input } = payload;
            return await this.transactionService.createOneTransaction(input)
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

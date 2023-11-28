import { Injectable, BadRequestException } from '@nestjs/common';
import Portfolio from '../models/portfolio';
import { v4 as uuidv4 } from 'uuid';
import { IPortfolio } from 'src/types/index';
import { TransactionService } from "../services/transaction.service";
import { formatTransactionsByAssets } from "../utils/format";

@Injectable()
export class PortfoliosService {
    constructor(private readonly transactionService: TransactionService) { }
    async createOnePortfolio(portfolioData: IPortfolio): Promise<object> {
        try {
            const { portfolioName, timeCreated, timeUpdated, assets } = portfolioData;

            const existingPortfolio = await Portfolio.findOne({ portfolioName })
            // console.log('existingPortfolio', existingPortfolio)
            if (existingPortfolio) throw new BadRequestException('Portfolio already exists')


            const portfolioId = uuidv4();
            const newPortfolio = await new Portfolio({
                portfolioName,
                portfolioId,
                timeCreated,
                timeUpdated,
                assets
            }).save();
            return { result: { portfolioId: newPortfolio['portfolioId'] } }
        }
        catch (error) {
            console.log(error)
        }
    }
    async getPortfolios(): Promise<object> {
        try {
            const allPortfolios = await Portfolio.find();
            console.log('allPortfolios', allPortfolios);
            // const allNames = allPortfolios.map(item => item.name)
            return { result: allPortfolios }
        } catch (error) {
            console.log(error)
        }
    }
    async getPortfolioById(id: string): Promise<object> {
        try {
            const portfolio = await Portfolio.find({ portfolioId: id });
            const transactions: any = await this.transactionService.getOnePortfolioTransactions(id);

            const sortedTransactions = formatTransactionsByAssets(transactions.result.transactions);
            portfolio[0].assets = sortedTransactions;

            return { result: portfolio }
        } catch (error) {
            console.log(error)
        }
    }
}
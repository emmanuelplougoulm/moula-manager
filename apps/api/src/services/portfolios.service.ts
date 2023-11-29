import { Injectable, BadRequestException } from '@nestjs/common';
import Portfolio from '../models/portfolio';
import { v4 as uuidv4 } from 'uuid';
import { IPortfolio } from 'src/types/index';
import { TransactionService } from "../services/transaction.service";
import { formatTransactionsByAssets } from "../utils/format";


interface AggregatedPortfolio {
    [key: string]: any; // Index signature pour autoriser des clés arbitraires
}


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
            return { result: allPortfolios }
        } catch (error) {
            console.log(error)
        }
    }
    async getPortfolioById(id: string): Promise<object> {
        try {
            const portfolio: AggregatedPortfolio | null = await Portfolio.findOne({ portfolioId: id });

            if (portfolio) {
                const transactions: any = await this.transactionService.getOnePortfolioTransactions(id);
                const sortedTransactions = formatTransactionsByAssets(transactions.result.transactions);

                const updatedPortfolio: AggregatedPortfolio = {
                    ...portfolio.toObject(),
                    assets: sortedTransactions
                }
                return { result: { ...updatedPortfolio } }
            } else {
                return { return: null }
            }
        } catch (error) {
            console.log(error)
        }
    }
    async deleteOnePortfolio(id: string): Promise<object> {
        try {
            const portfolio = await Portfolio.deleteOne({ portfolioId: id });

            return { result: portfolio }
        } catch (error) {
            console.log(error)
        }
    }
}
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
    async createPortfolio(portfolioData: IPortfolio): Promise<object> {
        try {
            const { portfolioName } = portfolioData;
            const existingPortfolio = await Portfolio.findOne({ portfolioName })

            if (existingPortfolio) throw new BadRequestException('Portfolio already exists')

            const portfolioId = uuidv4();
            const newPortfolio = await new Portfolio({
                ...portfolioData,
                portfolioId
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
    async deletePortfolioById(id: string): Promise<object> {
        try {
            const portfolio = await Portfolio.deleteOne({ portfolioId: id });
            const { deletedCount } = portfolio;

            return { result: { deletedCount } }
        } catch (error) {
            console.log(error)
        }
    }
}
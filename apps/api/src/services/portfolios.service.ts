import { Injectable } from '@nestjs/common';
import Portfolio from '../models/portfolio';
import Transaction from '../models/transaction';

@Injectable()
export class PortfoliosService {
    async createOnePortfolio(portfolioData: object): Promise<object> {
        try {
            const newPortfolio = await new Portfolio(portfolioData).save();
            return { result: { portfolioId: newPortfolio['_id'] } }
        } catch (error) {
            console.log(error)
        }
    }
    async getPortfoliosNames(): Promise<object> {
        try {
            const allPortfolios = await Portfolio.find();
            const allNames = allPortfolios.map(item => item.name)
            return { result: allNames }
        } catch (error) {
            console.log(error)
        }
    }
    async getOnePortfolioByName(name): Promise<object> {
        try {
            const portfolio = await Transaction.find({ portfolioName: name });
            return { result: portfolio }
        } catch (error) {
            console.log(error)
        }
    }
}
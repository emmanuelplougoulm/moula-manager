import { Injectable, BadRequestException } from '@nestjs/common';
import Portfolio from '../models/portfolio';
import { v4 as uuidv4 } from 'uuid';
import { IPortfolio } from 'src/types/index';
// import Transaction from '../models/transaction';

@Injectable()
export class PortfoliosService {
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
    // async getPortfoliosNames(): Promise<object> {
    //     try {
    //         const allPortfolios = await Portfolio.find();
    //         const allNames = allPortfolios.map(item => item.name)
    //         return { result: allNames }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // async getOnePortfolioByName(name): Promise<object> {
    //     try {
    //         const portfolio = await Transaction.find({ portfolioName: name });
    //         return { result: portfolio }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

}
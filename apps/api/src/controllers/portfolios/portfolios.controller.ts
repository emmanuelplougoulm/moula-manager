import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { PortfoliosService } from '../../services/portfolios.service';
import { IPortfolio } from 'src/types/index';
// import { formatPortfolioTransactions } from "src/utils/format";

@Controller('portfolios')
export class PortfoliosController {
    constructor(private readonly portfoliosService: PortfoliosService) { }
    @Post()
    async createOnePortfolio(@Body() portfolioData: IPortfolio): Promise<any> {
        try {
            return await this.portfoliosService.createOnePortfolio(portfolioData);
        } catch (err) {
            return err;
        }
    }
    @Get()
    async getPortfolios(): Promise<object> {
        try {
            return await this.portfoliosService.getPortfolios();
        } catch (err) {
            return err;
        }
    }
    // @Get('/:name')
    // async getOnePortfolioByName(@Param('name') name: string): Promise<object> {
    //     try {

    //     } catch (err) {
    //         return err;
    //     }
    // }
}
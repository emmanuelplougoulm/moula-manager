import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
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
    @Get('/:id')
    async getPortfolioById(@Param('id') id: string): Promise<object> {
        try {
            return await this.portfoliosService.getPortfolioById(id);
        } catch (err) {
            return err;
        }
    }
    @Delete('/delete/:id')
    async deleteOnePortfolio(@Param('id') id: string): Promise<object> {
        try {
            return await this.portfoliosService.deleteOnePortfolio(id);
        } catch (err) {
            return err;
        }
    }
}
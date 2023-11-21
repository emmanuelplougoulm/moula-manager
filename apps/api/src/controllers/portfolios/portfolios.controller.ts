import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { PortfoliosService } from '../../services/portfolios.service';

@Controller('portfolios')
export class PortfoliosController {
    constructor(private readonly portfoliosService: PortfoliosService) { }
    @Post()
    async createOnePortfolio(@Body() portfolioData: object): Promise<any> {
        try {
            return await this.portfoliosService.createOnePortfolio(portfolioData);
        } catch (err) {
            return err;
        }
    }
    @Get('/names')
    async getPortfoliosNames(): Promise<object> {
        try {
            return await this.portfoliosService.getPortfoliosNames();
        } catch (err) {
            return err;
        }
    }
    @Get('/:name')
    async getOnePortfolioByName(@Param('name') name: string): Promise<object> {
        try {
            console.log("name", name)
            return await this.portfoliosService.getOnePortfolioByName(name);
        } catch (err) {
            return err;
        }
    }
}
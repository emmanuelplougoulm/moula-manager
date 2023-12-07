import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
import { PortfoliosService } from '../../services/portfolios.service';
import * as val from './validation';


@Controller('portfolios')
export class PortfoliosController {
    constructor(private readonly portfoliosService: PortfoliosService) { }
    @Post()
    async createOnePortfolio(@Body() payload: val.createPortfolio): Promise<any> {
        try {
            const { input } = payload;
            return await this.portfoliosService.createPortfolio(input);
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
    @Delete('/:id')
    async deletePortfolioById(@Param('id') id: string): Promise<object> {
        try {
            return await this.portfoliosService.deletePortfolioById(id);
        } catch (err) {
            return err;
        }
    }
}
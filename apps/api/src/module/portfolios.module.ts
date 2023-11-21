import { Module } from '@nestjs/common';
import { PortfoliosController } from '../controllers/portfolios/portfolios.controller';
import { PortfoliosService } from '../services/portfolios.service';

@Module({
    controllers: [PortfoliosController],
    providers: [PortfoliosService],
})
export class PortfoliosModule { };
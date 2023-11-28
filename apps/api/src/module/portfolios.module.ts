import { Module } from '@nestjs/common';
import { PortfoliosController } from '../controllers/portfolios/portfolios.controller';
import { PortfoliosService } from '../services/portfolios.service';
import { TransactionModule } from './transaction.module'
@Module({
    controllers: [PortfoliosController],
    providers: [PortfoliosService],
    imports: [TransactionModule]
})
export class PortfoliosModule { };
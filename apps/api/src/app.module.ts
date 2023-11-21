import { Module } from '@nestjs/common';
import { TransactionModule } from './module/transaction.module';
import { PortfoliosModule } from './module/portfolios.module';


@Module({
  imports: [TransactionModule, PortfoliosModule],
})
export class AppModule { }

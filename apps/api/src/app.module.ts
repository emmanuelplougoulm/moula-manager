import { Module } from '@nestjs/common';
import { TransactionModule } from './module/transaction.module';
import { PortfoliosModule } from './module/portfolios.module';
import { CmcModule } from './module/cmc.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [TransactionModule, PortfoliosModule, CmcModule, ConfigModule.forRoot()],
})
export class AppModule { }

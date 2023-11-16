import { Module } from '@nestjs/common';
import { TransactionModule } from './module/transaction.module';
import { WalletModule } from './module/wallet.module';


@Module({
  imports: [TransactionModule, WalletModule],
  // controllers: [TransactionController],
  // providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TransactionModule } from './module/transaction.module';


@Module({
  imports: [TransactionModule],
  // controllers: [TransactionController],
  // providers: [AppService],
})
export class AppModule { }

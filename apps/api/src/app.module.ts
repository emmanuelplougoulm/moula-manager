import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TransactionModule } from './module/transaction.module';
// import { TransactionController } from './controllers/transaction/transaction.controller';


@Module({
  imports: [TransactionModule],
  // controllers: [TransactionController],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }

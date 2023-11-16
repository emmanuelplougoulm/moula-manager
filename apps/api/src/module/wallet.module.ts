import { Module } from '@nestjs/common';
import { WalletController } from '../controllers/wallet/wallet.controller';
import { WalletService } from '../services/wallet.service';

@Module({
    controllers: [WalletController],
    providers: [WalletService],
})
export class WalletModule { };
import { Controller, Post, Body } from "@nestjs/common";
import { WalletService } from '../../services/wallet.service';

@Controller('wallets')
export class WalletController {
    constructor(private readonly walletService: WalletService) { }
    @Post()
    async createWallet(@Body() walletData: object): Promise<any> {
        try {
            this.walletService.createOneWallet(walletData)
        } catch (err) {
            return err;
        }
    }
}
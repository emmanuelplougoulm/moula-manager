import { Injectable } from '@nestjs/common';
import Wallet from '../models/wallet';

@Injectable()
export class WalletService {
    async createOneWallet(walletData: object): Promise<object> {
        try {
            const wallet = await new Wallet(walletData).save();
            return { result: { walletId: wallet['walletId'] } }
        } catch { }
    }
}
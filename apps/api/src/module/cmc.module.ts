import { Module } from '@nestjs/common';
// import { CmcController } from '../controllers/cmc/cmc.controller';
import { CmcService } from '../services/cmc.service';

@Module({
    // controllers: [CmcController],
    providers: [CmcService],

})
export class CmcModule { };
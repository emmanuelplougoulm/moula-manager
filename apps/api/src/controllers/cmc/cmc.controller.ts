// import { Controller, Get } from "@nestjs/common";
// import * as val from './validation';
// import { CmcService } from '../../services/cmc.service';

// @Controller('cmc')
// export class CmcController {
//     constructor(private readonly cmcService: CmcService) { }
//     @Get('/listing')
//     async getCoinsListing(): Promise<object> {
//         try {
//             return await this.cmcService.getCoinsListing();
//         } catch (err) {
//             return err;
//         }
//     }
// }
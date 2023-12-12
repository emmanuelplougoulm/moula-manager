import { Injectable } from '@nestjs/common';


@Injectable()
export class CmcService {
    constructor() { }
    async getCoinsListing(): Promise<object> {

        // eslint-disable-next-line turbo/no-undeclared-env-vars
        const CMC_PRO_API_KEY = process.env.CMC_PRO_API_KEY;
        console.log('CMC_PRO_API_KEY', CMC_PRO_API_KEY)

        const headers = {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': CMC_PRO_API_KEY, // Add any other headers as needed
        };





        try {
            // const coinList = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${CMC_PRO_API_KEY}`)
            const coinList = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?start=2&limit=100&sort=id`, { headers: headers })
            console.log('coinList', coinList)
            const coinListJson = await coinList.json();
            return coinListJson;
        } catch (error) {
            console.log(error)
        }
    }

}
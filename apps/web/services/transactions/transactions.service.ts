import { httpClient } from "../httpClient/httpClient";

const TRANSACTIONS_ENDPOINT = '/transactions';

export async function createTransaction(transactionData: object) {
    try {
        const response = await httpClient(TRANSACTIONS_ENDPOINT, { method: 'POST', body: JSON.stringify(transactionData) });
        return response.result;
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

export async function getAllTransactions() {
    try {
         const response =  await httpClient(TRANSACTIONS_ENDPOINT, { method: 'GET' });
        return response.result;
         // console.log("/transactions", transactions.data.result)
    } catch (error) {
        console.error('Error in GET ALL request:', error);
        throw error;
    }
}
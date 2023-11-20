import httpClient from "../httpClient/httpClient";

export async function createTransaction(input: object) {
    try {
        console.log('input', input)
        return await httpClient.post("/transactions", input.value);

    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

export async function getAllTransactions() {
    try {
        const transactions = await httpClient.get("/transactions");
        console.log("/transactions", transactions.data)
        return transactions
    } catch (error) {
        console.error('Error in GET ALL request:', error);
        throw error;
    }
}
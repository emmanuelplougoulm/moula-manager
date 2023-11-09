import httpClient from "../httpClient/httpClient";

export async function createTransaction(input: object) {
    try {
        const response = await httpClient.post("/transactions", input);
        return response.data
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

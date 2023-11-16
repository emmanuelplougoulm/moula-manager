import httpClient from "../httpClient/httpClient";

export async function createTransaction(input: object) {
    try {
        console.log('input', input)
        const response = await httpClient.post("/transactions", input.value);
        return response.data
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

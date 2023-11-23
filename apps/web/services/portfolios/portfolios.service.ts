import httpClient from "../httpClient/httpClient";

export async function createPortfolio(input: object) {
    try {
        const response = await httpClient.post("/portfolios", input);
        return response.data
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

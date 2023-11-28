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
export async function getPortfolios() {
    try {
        const response = await httpClient.get("/portfolios");
        console.log('portfolios', response.data.result)
        return response.data.result
    } catch (error) {
        console.error('Error in GET portfolios request:', error);
        throw error;
    }
}

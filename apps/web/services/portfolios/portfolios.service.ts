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

        return response.data.result
    } catch (error) {
        console.error('Error in GET portfolios request:', error);
        throw error;
    }
}

export async function getPortfolioById(id: string) {
    try {
        const response = await httpClient.get(`/portfolios/${id}`);
        return response.data.result
    } catch (error) {
        console.error('Error in GET portfolio by ID request:', error);
        throw error;
    }
}

export async function deletePortfolioById(id: string) {
    try {
        console.log('id', id)
        const response = await httpClient.delete(`/portfolios/delete/${id}`);
        return response.data.result
    } catch (error) {
        console.error('Error in DELETE portfolio by ID request:', error);
        throw error;
    }
}

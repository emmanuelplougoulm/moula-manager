import { httpClient } from "../httpClient/httpClient";

export async function createPortfolio(payload: object) {
    try {
        const response = await httpClient("portfolios", { method: 'POST', body: JSON.stringify(payload) })
        return response.result
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
}

export async function getPortfolios() {
    try {
        const response = await httpClient("portfolios", { method: 'GET' })
        return response.result
    } catch (error) {
        console.error('Error in GET portfolios request:', error);
        throw error;
    }
}

export async function getPortfolioById(id: string) {
    try {
        const response = await httpClient(`portfolios/${id}`, { method: 'GET' })
        return response.result;
    } catch (error) {
        console.error('Error in GET portfolio by ID request:', error);
        throw error;
    }
}

export async function deletePortfolioById(id: string) {
    try {
        const response = await httpClient(`portfolios/${id}`, { method: 'DELETE' });
        return response.result
    } catch (error) {
        console.error('Error in DELETE portfolio by ID request:', error);
        throw error;
    }
}

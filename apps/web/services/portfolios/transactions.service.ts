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

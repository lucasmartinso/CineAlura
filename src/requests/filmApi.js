import api from "./api"; 

export async function getRecommendations() { 
    const response = await api.get('/');
    return response.data;
}
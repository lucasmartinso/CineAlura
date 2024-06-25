import api from "./api"; 

export async function getRecommendations() { 
    const response = await api.post('/api/films');
    console.log(response);
}
import axios from 'axios';

export const createClient = async (client) => {
  try {
    const response = await axios.post('http://localhost:4000/clients', client);
    return response.data;
  } catch (error) {
    console.error('Error al hacer la solicitud desde api:', error.response ? error.response.data : error.message);
    throw error;
  }
};


















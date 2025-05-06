import axios from 'axios';

//TODO: Mover Url pra arquivo proprio
const API_BASE = process.env.REACT_APP_API_BASE;


//ENDPOINT OBTER TODOS OS ITENS DO MENU
export const getItems = async () => {
  try {
    const response = await axios.get(`${API_BASE}/Item/todos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar itens do cardápio:', error);
    throw error;
  }
  };
  

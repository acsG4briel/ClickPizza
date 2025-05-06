import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

//ENDPOINT OBTER ENTREGA
export const getEntregaEmAndamento = async (usuarioId) => {
  try {
    const response = await axios.get(`${API_BASE}/Entrega/entrega-em-andamento`, {
      params: { usuarioId }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar entrega em andamento:', error);
    throw error;
  }
};

// ENDPOINT FINALIZAR ENTREGA
export const patchFinalizarEntrega = async (entregaId) => {
  try {
    const response = await axios.patch(`${API_BASE}/Entrega/finalizar-entrega`, null, {
      params: { entregaId }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao finalizar entrega:', error);
    throw error;
  }
  };
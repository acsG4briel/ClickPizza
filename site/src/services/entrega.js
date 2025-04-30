import axios from 'axios';

//LOCAL

//ENDPOINT OBTER ENTREGA
export const getEntregaEmAndamento = async (usuarioId) => {
  try {
    const response = await axios.get(`https://localhost:44329/Entrega/entrega-em-andamento`, {
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
    const response = await axios.patch(`https://localhost:44329/Entrega/finalizar-entrega`, null, {
      params: { entregaId }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao finalizar entrega:', error);
    throw error;
  }
  };
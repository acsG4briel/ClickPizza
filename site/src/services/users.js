import axios from "axios";

//ENDPOINT OBTER USUARIO  
export const getUsuario = async (usuarioId) => {
  try {
    const response = await axios.get('https://localhost:44329/api/Usuario', {
      params: { usuarioId }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
 };

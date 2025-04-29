import axios from 'axios';

// const URL_BASE =  'https://localhost:44329/Pagamento';

// //ENDPOINT OBTER FORMAS PAGAMENTO POR USUARIO ID
// export const getFormasPagamento = async (usuarioId) => {
//     try {
//       const response = await axios.get(`${URL_BASE}/${usuarioId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Erro ao buscar formas de pagamento:', error);
//       throw error;
//     }
//     };

//PRODUCAO

const URL_BASE =  'https://clickpizza-production.up.railway.app/Pagamento';

//ENDPOINT OBTER FORMAS PAGAMENTO POR USUARIO ID
export const getFormasPagamento = async (usuarioId) => {
try {
  const response = await axios.get(`${URL_BASE}/${usuarioId}`);
  return response.data;
} catch (error) {
  console.error('Erro ao buscar formas de pagamento:', error);
  throw error;
}
};
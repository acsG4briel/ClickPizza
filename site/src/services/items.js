import axios from 'axios';

// //TODO: Mover Url pra arquivo proprio
// const URL_BASE =  'https://localhost:44329/Item';


// //ENDPOINT OBTER TODOS OS ITENS DO MENU
// export const getItems = async () => {
//   try {
//     const response = await axios.get(`${URL_BASE}/todos`);
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao buscar itens do cardápio:', error);
//     throw error;
//   }
//   };
  

//PRODUCAO

const URL_BASE = 'https://clickpizza-production.up.railway.app/Item';

// ENDPOINT OBTER TODOS OS ITENS DO MENU
export const getItems = async () => {
try {
  const response = await axios.get(`${URL_BASE}/todos`);
  return response.data;
} catch (error) {
  console.error('Erro ao buscar itens do cardápio:', error);
  throw error;
}
};
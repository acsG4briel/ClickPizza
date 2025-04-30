import axios from 'axios';

const URL_BASE =  'https://localhost:44329/Pagamento';

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

//ENDPOINT CRIAR INTENÇÃO DE PAGAMENTO STRIPE
export const getIntencaoPagamentoStripe = async (valor) => {
  try {
    const response = await axios.post(`${URL_BASE}/criar-intencao`, valor, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data; // deve conter { clientSecret: ... }
  } catch (error) {
    console.error('Erro ao criar intenção de pagamento Stripe:', error);
    throw error;
  }
  };

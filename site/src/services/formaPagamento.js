import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

//ENDPOINT CRIAR INTENÇÃO DE PAGAMENTO STRIPE
export const getIntencaoPagamentoStripe = async (valor) => {
  try {
    const response = await axios.post(`${API_BASE}/Pagamento/criar-intencao`, valor, {
      headers: { 'Content-Type': 'application/json' }
    });
    return response.data; // deve conter { clientSecret: ... }
  } catch (error) {
    console.error('Erro ao criar intenção de pagamento Stripe:', error);
    throw error;
  }
  };

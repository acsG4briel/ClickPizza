import axios from "axios";

const URL_BASE =  'https://localhost:44329/Pedido';

//ENBDPOINT ENVIAR PEDIDO
export const postPedido = async (informacoesPedido) => {
    try {
        await axios.post(`${URL_BASE}/enviar-pedido`, informacoesPedido);
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      throw error;
    }
    };
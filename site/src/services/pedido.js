import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

//ENBDPOINT ENVIAR PEDIDO
export const postPedido = async (informacoesPedido) => {
    try {
        await axios.post(`${API_BASE}/Pedido/enviar-pedido`, informacoesPedido);
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      throw error;
    }
    };

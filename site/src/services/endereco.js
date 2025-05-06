import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export async function getEnderecoPorCep(cep) {
 try {
   const response = await axios.get(`${API_BASE}/Endereco/obter-por-cep`, {
     params: { cep }
   });
   return response.data;
 } catch (error) {
   console.error("Erro ao buscar endereço por CEP:", error);
   throw error;
 }
}

export async function postNovoEndereco(dados) {
    try {
      const response = await axios.post(`${API_BASE}/Endereco/cadastrar`, dados);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar novo endereço:", error);
      throw error  }
    }
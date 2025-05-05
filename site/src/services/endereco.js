import axios from "axios";

const API_BASE = "https://localhost:44329/Endereco";

export async function getEnderecoPorCep(cep) {
 try {
   const response = await axios.get(`${API_BASE}/obter-por-cep`, {
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
      const response = await axios.post(`${API_BASE}/cadastrar`, dados);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar novo endereço:", error);
      throw error  }
    }
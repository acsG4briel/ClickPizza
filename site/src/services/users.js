import axios from "axios";

//ENDPOINT LOGAR  
export const getLoginUsuario = async (login, senha) => {
  try {
    const response = await axios.get('https://localhost:44329/Usuario/login', {
      params: { Login: login, Senha: senha }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
  };

  // ENDPOINT CADASTRO
export const postCadastroUsuario = async ({
  login,
  senha,
  email,
  nome,
  cpf,
  celular
  }) => {
  try {
    const payload = {
      nomeLogin: login,
      senhaLogin: senha,
      emailLogin: email,
      nome: nome,
      cpf: cpf,
      celular: celular ? Number(celular) : 0 
    };
  
    const response = await axios.post(
      'https://localhost:44329/Usuario/cadastro',
      payload
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
  };

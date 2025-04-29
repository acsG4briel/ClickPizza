import React, { useState } from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import {
  PerfilContainer,
  Titulo,
  Campo,
  Label,
  ImgPreview,
  Input,
  Select,
  SaveButton
} from "./PaginaPerfil.styled"
import { useAtomValue } from "jotai";

import { Usuario } from "../../../atoms/Cliente/atomosCliente";

//TODO: CADASTRO FORMAS DE PAGAMENTO
const PaginaPerfil = () => {
  const usuario = useAtomValue(Usuario);
  
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    endereco: "",
    imagem: "",
    formaDePagamento: "",
  });
  
  // Preencher o form com os dados do usuário quando ele estiver disponível
  React.useEffect(() => {
    if (usuario) {
      setForm({
        nome: usuario.nome || "",
        cpf: usuario.cpf || "",
        endereco: usuario.endereco || "",
        imagem: usuario.imagem || "",
        formaDePagamento: usuario.formasPagamento?.[0] || "",
      });
    }
  }, [usuario]);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados salvos!\n" + JSON.stringify(form, null, 2));
  };
  
  // Não renderiza nada enquanto não carregar o usuário
  if (!usuario) return <div>Carregando...</div>;
  
  return (
    <PaginaBase>
      <PerfilContainer>
        <Titulo>Meu Perfil</Titulo>
        <form onSubmit={handleSubmit}>
          <Campo style={{ alignItems: "center" }}>
            <ImgPreview src={form.imagem || "https://ui-avatars.com/api/?name=" + encodeURIComponent(form.nome)} alt="Foto de perfil" />
          </Campo>
          <Campo>
            <Label htmlFor="nome">Nome:</Label>
            <Input name="nome" value={form.nome} onChange={handleChange} />
          </Campo>
          <Campo>
            <Label htmlFor="cpf">CPF:</Label>
            <Input name="cpf" value={form.cpf} onChange={handleChange} />
          </Campo>
          <Campo>
            <Label htmlFor="endereco">Endereço:</Label>
            <Input name="endereco" value={form.endereco} onChange={handleChange} />
          </Campo>
          <Campo>
            <Label htmlFor="formaDePagamento">Forma de Pagamento:</Label>
            <Select name="formaDePagamento" value={form.formaDePagamento} onChange={handleChange}>
              {usuario.formasPagamento && usuario.formasPagamento.map(fp => (
                <option key={fp} value={fp}>{fp}</option>
              ))}
            </Select>
          </Campo>
          <SaveButton type="submit">Salvar</SaveButton>
        </form>
      </PerfilContainer>
    </PaginaBase>
  );
  };
  
  export default PaginaPerfil;
import React from "react";
import { useState } from "react";
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

import { usuario as usuarioData } from "../../../services/users";

//TODO: CADASTRO FORMAS DE PAGAMENTO
const PaginaPerfil = () => {
  const [form, setForm] = useState(usuarioData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //TODO: ENDPOINT EDITAR USUARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados salvos!\n" + JSON.stringify(form, null, 2));
  };

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
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Dinheiro</option>
              <option>Pix</option>
            </Select>
          </Campo>
          <SaveButton type="submit">Salvar</SaveButton>
        </form>
      </PerfilContainer>
    </PaginaBase>
  );
};

export default PaginaPerfil;
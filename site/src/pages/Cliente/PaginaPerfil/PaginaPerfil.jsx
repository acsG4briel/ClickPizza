import React, { useState } from "react";
import PaginaBase from "../Components/PaginaBase/PaginaBase";
import {
  PerfilContainer,
  Titulo,
  Campo,
  Label,
  ImgPreview,
  Input,
  SaveButton,
  EnderecoButton
} from "./PaginaPerfil.styled"
import { useAtomValue } from "jotai";
import ModalCadastroEndereco from "../Components/ModalCadastroEndereco/ModalCadastroEndereco";

import { Usuario } from "../../../atoms/Cliente/atomosCliente";

//TODO: CADASTRO FORMAS DE PAGAMENTO
const PaginaPerfil = () => {
  const usuario = useAtomValue(Usuario);

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    endereco: "",
    imagem: "",
  });

  const [showModal, setShowModal] = useState(false);

  React.useEffect(() => {
    if (usuario) {
      setForm({
        nome: usuario.nome || "",
        cpf: usuario.cpf || "",
        endereco: usuario.endereco || "",
        imagem: usuario.imagem || "",
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

  return (
    <>
    {showModal && (
      <ModalCadastroEndereco
        onClose={() => setShowModal(false)}
        onSave={(enderecoObj) => {
          // Aqui você pode salvar o endereço no form ou fazer o que quiser
          setForm({ ...form, endereco: `${enderecoObj.rua}, ${enderecoObj.numero} - ${enderecoObj.bairro}, ${enderecoObj.cidade} - ${enderecoObj.estado}, ${enderecoObj.cep}` });
          setShowModal(false);
        }}
      />
     )}
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
          <Campo style={{ flexDirection: "column" }}>
            <Label htmlFor="endereco">Endereço:</Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input
                name="endereco"
                value={form.endereco}
                onChange={handleChange}
                disabled={!!usuario?.endereco}
                style={{ flex: 1 }}
              />
              {!usuario?.endereco && (
                <EnderecoButton
                type="button"
                onClick={() => setShowModal(true)}
                style={{ marginLeft: 12 }}
               >
                +
               </EnderecoButton>
              )}
            </div>
          </Campo>
          <SaveButton type="submit">Salvar</SaveButton>
        </form>
      </PerfilContainer>
    </PaginaBase>
    </>
  );
};

export default PaginaPerfil;
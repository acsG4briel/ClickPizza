import React, { useState } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalTitle,
    Campo,
    Label,
    Input,
    LupaButton,
    Row,
    SaveButton,
    CloseButton
} from "./ModalCadastroEndereco.styled";
import { getEnderecoPorCep, postNovoEndereco } from "../../../../services/endereco";
import { useAtomValue } from "jotai";
import { Usuario } from "../../../../atoms/Cliente/atomosCliente";

const ModalCadastroEndereco = ({ onClose, onSave }) => {
    const usuario = useAtomValue(Usuario);
    const [form, setForm] = useState({
        usuarioId: "",
        cep: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: ""
    });

    const [disabledFields, setDisabledFields] = useState({
        cep: false,
        estado: false,
        cidade: false,
        bairro: false,
        rua: false
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLupaClick = async () => {
        try {
            const data = await getEnderecoPorCep(form.cep);
            setForm({
                ...form,
                cep: data.cep || form.cep,
                estado: data.uf || "",
                cidade: data.localidade || "",
                bairro: data.bairro || "",
                rua: data.logradouro || "",
            });
            setDisabledFields({
                cep: true,
                estado: true,
                cidade: true,
                bairro: true,
                rua: true
            });
        } catch (error) {
            alert("CEP não encontrado ou erro na consulta.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dadosEnvio = {
                ...form,
                usuarioId: usuario?.usuarioId
            };
        
            await postNovoEndereco(dadosEnvio);
            alert("Endereço cadastrado com sucesso!");
            onSave && onSave(dadosEnvio);
            onClose(); // Fecha o modal
        } catch (error) {
            alert("Erro ao cadastrar endereço.");
        }
        };

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ModalTitle>Cadastro de Endereço</ModalTitle>
                <form onSubmit={handleSubmit}>
                    {/* CEP + Lupa */}
                    <Row>
                        <Campo style={{ flex: 2 }}>
                            <Label htmlFor="cep">CEP:</Label>
                            <Input
                                name="cep"
                                value={form.cep}
                                onChange={handleChange}
                                required
                                disabled={disabledFields.cep}
                            />
                        </Campo>
                        <LupaButton type="button" onClick={handleLupaClick} title="Buscar CEP">
                            🔍
                        </LupaButton>
                    </Row>

                    <Campo>
                        <Label htmlFor="estado">Estado:</Label>
                        <Input
                            name="estado"
                            value={form.estado}
                            onChange={handleChange}
                            required
                            disabled={disabledFields.estado}
                        />
                    </Campo>
                    <Campo>
                        <Label htmlFor="cidade">Cidade:</Label>
                        <Input
                            name="cidade"
                            value={form.cidade}
                            onChange={handleChange}
                            required
                            disabled={disabledFields.cidade}
                        />
                    </Campo>
                    <Campo>
                        <Label htmlFor="bairro">Bairro:</Label>
                        <Input
                            name="bairro"
                            value={form.bairro}
                            onChange={handleChange}
                            required
                            disabled={disabledFields.bairro}
                        />
                    </Campo>
                    <Campo>
                        <Label htmlFor="rua">Rua:</Label>
                        <Input
                            name="rua"
                            value={form.rua}
                            onChange={handleChange}
                            required
                            disabled={disabledFields.rua}
                        />
                    </Campo>
                    <Campo>
                        <Label htmlFor="numero">Número:</Label>
                        <Input
                            name="numero"
                            type="number"
                            value={form.numero}
                            onChange={handleChange}
                            min={0}
                            required
                        />
                    </Campo>
                    <Campo>
                        <Label htmlFor="complemento">Complemento:</Label>
                        <Input
                            name="complemento"
                            value={form.complemento}
                            onChange={handleChange}
                        />
                    </Campo>
                    <SaveButton type="submit">SALVAR ENDERECO</SaveButton>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalCadastroEndereco;
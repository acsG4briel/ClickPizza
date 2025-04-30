import React, { useState } from "react";
import {
    Form,
    Label,
    Input,
    Button,
    CadastroLink,
    Backdrop,
    SidebarModal,
    FecharBotao,
    ErrorMsg,
} from "./ModalLogin.styled";
import { useSetAtom } from "jotai";
import { Usuario } from "../../../atoms/Cliente/atomosCliente";
import { getLoginUsuario, postCadastroUsuario } from "../../../services/users";

const ModalLogin = ({ onClose }) => {
    const setUsuario = useSetAtom(Usuario);
    const [isCadastro, setIsCadastro] = useState(false);
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [cadastro, setCadastro] = useState({
        login: "",
        senha: "",
        confirmarSenha: "",
        email: "",
        nome: "",
        cpf: "",
        celular: ""
    });

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const usuario = await getLoginUsuario(login, senha);
            setUsuario(usuario);
            onClose();
        } catch (error) {
            alert("Usuário ou senha inválidos!");
        }
    };


    const handleSubmitCadastro = async (e) => {
        e.preventDefault();

        const { confirmarSenha, ...dadosParaSalvar } = cadastro;
        try {
            await postCadastroUsuario(dadosParaSalvar);
            alert("Cadastro realizado com sucesso");
            setIsCadastro(false);
        } catch (error) {
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }
        };

    const handleChangeCadastro = (e) => {
        setCadastro({ ...cadastro, [e.target.name]: e.target.value });
    };

    const isCadastroValido =
        cadastro.login &&
        cadastro.senha &&
        cadastro.confirmarSenha &&
        cadastro.email &&
        cadastro.nome &&
        cadastro.cpf &&
        cadastro.senha === cadastro.confirmarSenha;

    return (

        <><Backdrop onClick={onClose} /><SidebarModal>
            <FecharBotao onClick={onClose} aria-label="Fechar">×</FecharBotao>
            {!isCadastro ? (
                <>
                    <h2>Entrar</h2>
                    <Form onSubmit={handleSubmitLogin}>
                        <div>
                            <Label htmlFor="login">Login</Label>
                            <Input
                                id="login"
                                type="text"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                                autoFocus />
                        </div>
                        <div>
                            <Label htmlFor="senha">Senha</Label>
                            <Input
                                id="senha"
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required />
                        </div>
                        <Button type="submit">Entrar</Button>
                        <CadastroLink  onClick={() => setIsCadastro(true)}>
                            Não possui login? Cadastre-se
                        </CadastroLink>
                    </Form>
                </>
            ) : (
                <>
                    <h2>Cadastro</h2>
                    <Form onSubmit={handleSubmitCadastro}>
                        <div>
                            <Label htmlFor="cadastro-login">Login</Label>
                            <Input
                                id="cadastro-login"
                                name="login"
                                type="text"
                                value={cadastro.login}
                                onChange={handleChangeCadastro}
                                required />
                        </div>
                        <div>
                            <Label htmlFor="cadastro-senha">Senha</Label>
                            <Input
                                id="cadastro-senha"
                                name="senha"
                                type="password"
                                value={cadastro.senha}
                                onChange={handleChangeCadastro}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="cadastro-confirmarSenha">Confirmar Senha</Label>
                            <Input
                                id="cadastro-confirmarSenha"
                                name="confirmarSenha"
                                type="password"
                                value={cadastro.confirmarSenha}
                                onChange={handleChangeCadastro}
                                required
                                style={{
                                    borderColor:
                                        cadastro.confirmarSenha && cadastro.senha !== cadastro.confirmarSenha
                                            ? "#b92d41"
                                            : undefined
                                }}
                            />
                            {cadastro.confirmarSenha && cadastro.senha !== cadastro.confirmarSenha && (
                                <ErrorMsg>As senhas não coincidem</ErrorMsg>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="cadastro-email">Email</Label>
                            <Input
                                id="cadastro-email"
                                name="email"
                                type="email"
                                value={cadastro.email}
                                onChange={handleChangeCadastro}
                                required />
                        </div>
                        <div>
                            <Label htmlFor="cadastro-nome">Nome</Label>
                            <Input
                                id="cadastro-nome"
                                name="nome"
                                type="text"
                                value={cadastro.nome}
                                onChange={handleChangeCadastro}
                                required />
                        </div>
                        <div>
                            <Label htmlFor="cadastro-cpf">CPF</Label>
                            <Input
                                id="cadastro-cpf"
                                name="cpf"
                                type="text"
                                value={cadastro.cpf}
                                onChange={handleChangeCadastro}
                                required />
                        </div>
                        <div>
                            <Label htmlFor="cadastro-celular">Celular (opcional)</Label>
                            <Input
                                id="cadastro-celular"
                                name="celular"
                                type="text"
                                value={cadastro.celular}
                                onChange={handleChangeCadastro} />
                        </div>
                        <Button type="submit" disabled={!isCadastroValido}>Cadastrar</Button>
                        <CadastroLink as="button" type="button" onClick={() => setIsCadastro(false)}>
                            Já possui login? Entrar
                        </CadastroLink>
                    </Form>
                </>
            )}
        </SidebarModal>
        </>
    );
};

export default ModalLogin;
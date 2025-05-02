import { atom } from "jotai";

export const pedidoEmCursoAtom = atom({
    itens: []
});

export const itensDisponiveis = atom([]);

export const Usuario = atom();

export const PagamentoAutorizado = atom(false);
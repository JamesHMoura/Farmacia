import Categoria from "./Categoria";

export default interface Categoria {
    nome: string;
    descricao: string;
    quantidade: number;
    laboratorio: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
  }
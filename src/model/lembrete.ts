import { Categoria } from './categoria';

export class Lembrete {
    id: String;
    descricao: String;
    data: Date;
    categoria: Categoria

    constructor(id?: String, descricao?: String, data?: Date, categoria?: Categoria) {
        this.id = id;
        this.descricao = descricao;
        this.data = data;
        this.categoria = categoria; 
    }
}
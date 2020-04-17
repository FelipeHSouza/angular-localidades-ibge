export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
}

export class ObterEstadosResult {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}
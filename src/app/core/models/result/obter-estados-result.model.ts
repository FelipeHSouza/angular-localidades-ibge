import { Regiao } from '../ibge/regiao.model';

export class ObterEstadosResult {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}
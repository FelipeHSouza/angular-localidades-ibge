import { Regiao } from './regiao.model';

export interface UF {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
  }
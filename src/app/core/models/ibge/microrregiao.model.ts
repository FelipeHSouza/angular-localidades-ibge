import { Mesorregiao } from './mesorregiao.model';

export interface Microrregiao {
    id: number;
    nome: string;
    mesorregiao: Mesorregiao;
}
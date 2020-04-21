import { Microrregiao } from './microrregiao.model';

export interface Municipio {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
}
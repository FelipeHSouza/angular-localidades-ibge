import { Municipio } from './municipio.model';

export interface Distrito {
    id: number;
    nome: string;
    municipio: Municipio;
}
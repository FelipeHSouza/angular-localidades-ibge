import { Subdistrito } from './ibge/subdistrito.model';

export interface MunicipioItem {
    id: number
    municipio: string
    microrregiao: string
    mesorregiao: string
    substrito?: Subdistrito
}
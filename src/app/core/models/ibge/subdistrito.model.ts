import { Distrito } from "./distrito.model";

export interface Subdistrito {
    id: number;
    nome: string;
    distrito: Distrito;
}
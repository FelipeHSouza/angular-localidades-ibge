import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ObterEstadosResult } from '../models/result/obter-estados-result.model';
import { ObterMunicipiosPorUfResult } from '../models/result/obter-municipios-por-uf-result.model';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(
    private http:  HttpClient
  ) { }

  obterEstados(): Observable<ObterEstadosResult[]>{
    return this.http.get<ObterEstadosResult[]>(
      `${environment.apiIbgeLocalidadesUrl}/estados`
    )
  };

  obterMunicipiosPorUf(id: number): Observable<ObterMunicipiosPorUfResult[]>{
    return this.http.get<ObterMunicipiosPorUfResult[]>(
      `${environment.apiIbgeLocalidadesUrl}/estados/${id}/municipios`
    )
  }
  
  obterTodosMunicipios(): Observable<ObterMunicipiosPorUfResult[]>{
    return this.http.get<ObterMunicipiosPorUfResult[]>(
      `${environment.apiIbgeLocalidadesUrl}/municipios`
    )
  }
}

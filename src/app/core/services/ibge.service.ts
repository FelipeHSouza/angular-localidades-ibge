import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ObterEstadosResult } from '../models/result/obter-estados-result.model';

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

  
}

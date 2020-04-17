import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Estados } from '../models/estados.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(
    private http:  HttpClient
  ) { }

  obterEstados(): Observable<Estados>{
    return this.http.get<Estados>(
      `${environment.apiIbgeLocalidadesUrl}/estados`
    )
  };

  
}

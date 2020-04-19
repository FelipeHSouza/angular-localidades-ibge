import { Component, OnInit } from '@angular/core';
import { IbgeService } from 'src/app/core/services/ibge.service';
import { ToolbarInfo } from 'src/app/core/models/toolbar-info.model';
import { groupBy, mergeMap, toArray } from 'rxjs/internal/operators';
import { ObterEstadosResult } from 'src/app/core/models/result/obter-estados-result.model';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {
  estados: ObterEstadosResult[]
  toolbarInfo: ToolbarInfo = {
    title: 'Estados',
    urlApi: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  }

  constructor(
    private _ibgeService: IbgeService
  ) { }

  ngOnInit(): void {
    this.obterEstados()
  }

  obterEstados() {
    this._ibgeService.obterEstados().subscribe(
      res => {
        this.estados = res
        console.log(res)
      }
    )
  }
}

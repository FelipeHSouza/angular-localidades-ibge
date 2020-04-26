import { Component, OnInit } from '@angular/core';
import { IbgeService } from 'src/app/core/services/ibge.service';
import { ToolbarInfo } from 'src/app/core/models/toolbar-info.model';
import { ObterEstadosResult } from 'src/app/core/models/result/obter-estados-result.model';
import { map } from 'rxjs/operators'
import { Title } from '@angular/platform-browser';

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
    private _ibgeService: IbgeService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.setTitle()
    this.obterEstados()
  }

  obterEstados() {
    this.estados = JSON.parse(localStorage.getItem('estados'))

    if (this.estados == null) {
      this._ibgeService.obterEstados().pipe(
        map(res => res.sort((a, b) => (a.sigla > b.sigla) ? 1 : -1))
      ).subscribe(
        res => {
          localStorage.setItem('estados', JSON.stringify(res))
          this.estados = res
        }
      )
    }
  }

  setTitle() {
    this.titleService.setTitle('Localidades IBGE - ' + this.toolbarInfo.title);
  }
}

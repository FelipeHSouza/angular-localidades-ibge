import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IbgeService } from 'src/app/core/services/ibge.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Municipio } from 'src/app/core/models/ibge/municipio.model';
import { ToolbarInfo } from 'src/app/core/models/toolbar-info.model';
import { MunicipioItem } from 'src/app/core/models/municipio-item.model';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MunicipiosComponent implements OnInit {
  flagImgSrc: string
  dscEstado: string
  paramId: string
  dataSource: any
  isLoading: boolean = true
  municipios: Municipio[]
  toolbarInfo: ToolbarInfo = {
    title: 'Municipios',
    urlApi: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios'
  }
  columns = ['id', 'municipio', 'microrregiao', 'mesorregiao'];

  constructor(
    private route: ActivatedRoute,
    private _ibgeService: IbgeService,
    private titleService: Title,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.setTitle()

    this.paramId = this.route.snapshot.paramMap.get('id');

    this.getFlagImage(parseInt(this.paramId))
    if (this.paramId == null)
      this.obterTodosMunicipios()
    else
      this.obterMunicipiosPorUf(parseInt(this.paramId))
  }

  obterMunicipiosPorUf(id: number) {
    this.isLoading = true
    this._ibgeService.obterMunicipiosPorUf(id).pipe(
      map(res => (res.map(
        item => (
          {
            id: item.id,
            municipio: item.nome,
            microrregiao: item.microrregiao.nome,
            mesorregiao: item.microrregiao.mesorregiao.nome
          }
        )
      ))
      )
    ).subscribe(
      res => {
        this.isLoading = false
        this.dataSource = new MatTableDataSource<MunicipioItem>(res);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  obterTodosMunicipios() {
    this._ibgeService.obterTodosMunicipios().subscribe(
      res => {
        this.municipios = res
      }
    )
  }

  setTitle() {
    this.titleService.setTitle('Localidades IBGE - ' + this.toolbarInfo.title);
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  getFlagImage(id: number) {
    this._ibgeService.obterUfPorId(id).subscribe(
      res => {
        this.flagImgSrc = `/assets/img/bandeiras/${res.sigla}.jpg`
        this.dscEstado = `${res.sigla} - ${res.nome}`
      }
    )
  }
}
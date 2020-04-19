import { Component, OnInit, Input } from '@angular/core'
import { ToolbarInfo } from 'src/app/core/models/toolbar-info.model'

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})

export class ToolbarTitleComponent {
  @Input() toolbarInfo: ToolbarInfo

  constructor() { }

}

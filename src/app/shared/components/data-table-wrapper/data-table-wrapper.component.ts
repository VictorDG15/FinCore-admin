import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table-wrapper',
  templateUrl: './data-table-wrapper.component.html',
  styleUrls: ['./data-table-wrapper.component.scss']
})
export class DataTableWrapperComponent {
  @Input() title = '';
  @Input() subtitle = '';
}

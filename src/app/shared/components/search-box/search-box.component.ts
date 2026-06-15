import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @Input() placeholder = 'Search...';
  @Output() search = new EventEmitter<string>();

  onSearch(value: string): void {
    this.search.emit(value.trim().toLowerCase());
  }
}

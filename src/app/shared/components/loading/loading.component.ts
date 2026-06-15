import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() rows = 4;
  get skeletonRows(): number[] {
    return Array.from({ length: this.rows }, (_, index) => index);
  }
}

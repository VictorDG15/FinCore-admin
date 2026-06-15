import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  readonly breadcrumbs$: Observable<string[]> = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    startWith(new NavigationEnd(0, this.router.url, this.router.url)),
    map(() => this.router.url.split('?')[0].split('/').filter(Boolean)),
    map((segments) => segments.length ? segments.map((segment) => this.format(segment)) : ['dashboard'])
  );

  constructor(private readonly router: Router) {}

  private format(segment: string): string {
    return segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
}

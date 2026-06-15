import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItem } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() mobileOpen = false;
  @Output() closeSidebar = new EventEmitter<void>();

  readonly items: SidebarItem[] = this.menuService.getSidebarItems();

  constructor(private readonly menuService: MenuService) {}
}

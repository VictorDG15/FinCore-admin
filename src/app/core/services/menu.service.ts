import { Injectable } from '@angular/core';
import { SidebarItem } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  getSidebarItems(): SidebarItem[] {
    return [
      { label: 'Dashboard', icon: 'pi pi-chart-line', route: '/dashboard' },
      { label: 'Customers', icon: 'pi pi-users', route: '/customers' },
      { label: 'Accounts', icon: 'pi pi-credit-card', route: '/accounts' },
      { label: 'Transactions', icon: 'pi pi-arrow-right-arrow-left', route: '/transactions' },
      { label: 'Requests', icon: 'pi pi-inbox', route: '/requests', badge: '8' },
      { label: 'Reports', icon: 'pi pi-file-export', route: '/reports' },
      { label: 'Users', icon: 'pi pi-shield', route: '/users' },
      { label: 'Settings', icon: 'pi pi-cog', route: '/settings' }
    ];
  }
}

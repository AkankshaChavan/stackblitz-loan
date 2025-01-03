import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, MegaMenuModule, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuItems = [
    { label: 'Personal', routerLink: '' },
    { label: 'NRI', routerLink: '' },
    { label: 'SME', routerLink: '' },
    { label: 'Wholesale', routerLink: '' },
    { label: 'Agri', routerLink: '' }
  ];

  activeDropdown: number | null = null;

  toggleDropdown(id: number): void {
    this.activeDropdown = this.activeDropdown === id ? null : id;
  }

  selectOption(option: string): void {
    console.log('Selected:', option);
    this.activeDropdown = null;
  }

}

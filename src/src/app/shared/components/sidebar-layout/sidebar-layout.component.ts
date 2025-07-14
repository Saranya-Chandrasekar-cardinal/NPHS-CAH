import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent, NavItem } from '../sidebar-nav/sidebar-nav.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [CommonModule, SidebarNavComponent, FooterComponent, HeaderComponent, BannerComponent],
  template: `
  <app-header></app-header>
    <div class="main-container">
      <app-sidebar-nav 
        [navItems]="navItems"
        (navClick)="onNavClick($event)"
      ></app-sidebar-nav>
      
      <div class="content-area">
        <ng-content></ng-content>
      </div>

      <div class="banner-area">
        <app-banner></app-banner>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styleUrl: './sidebar-layout.component.scss'
})
export class SidebarLayoutComponent {
  @Input() navItems: NavItem[] = [];

  onNavClick(item: NavItem) {
    // Handle navigation clicks if needed
    console.log('Navigation clicked:', item);
  }
}

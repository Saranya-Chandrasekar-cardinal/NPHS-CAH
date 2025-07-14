import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, BannerComponent],
  template: `
  <app-header></app-header>
    <div class="main-container">
      <div class="content-area">
        <ng-content></ng-content>
      </div>
      <div class="banner-area">
        <app-banner></app-banner>
      </div>
    </div>
  <app-footer></app-footer>
  `,
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent { }

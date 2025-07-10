import { Component,OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { BrandService } from './brand.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Ordering/Tracking';
  isLoginPage = false;
  brand = this.bs.brand;

  constructor(private router: Router,private bs: BrandService) {

    // Listen to route changes to determine if we're on the login page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.url === '/login' || event.url === '/';
    });

    // Check initial route
    this.isLoginPage = this.router.url === '/login' || this.router.url === '/';
  }
  ngOnInit() {

    // call theming css
    this.loadBrandCss(this.brand);
  }

  loadBrandCss(brand: string) {
    const existingLink = document.getElementById('brand-theme') as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = `assets/themes/${brand}/theme.css`;
    } else {
      const link = document.createElement('link');
      link.id = 'brand-theme';
      link.rel = 'stylesheet';
      link.href = `assets/themes/${brand}/theme.css`;
      document.head.appendChild(link);
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToOrdering() {
    this.router.navigate(['/ordering']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

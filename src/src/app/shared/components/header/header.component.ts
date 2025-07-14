import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MOCK_PAGES } from 'src/app/data/page-details-mock';
import { BrandService } from '../../../brand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  brand = this.bs.brand;
  title = 'Login';
  isLoginPage = false;

  constructor(private router: Router, private bs: BrandService, private route: ActivatedRoute) {



    // Listen to route changes to determine if we're on the login page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.url === '/login' || event.url === '/';
      const currentUrl = MOCK_PAGES.filter(page => event.url.includes(page.url));
      if (currentUrl) {
        this.title = currentUrl[0].name;
      }
    });

    // Check initial route
    this.isLoginPage = this.router.url === '/login' || this.router.url === '/';
  }

  ngOnInit() {

    // to get brand name
    this.route.paramMap.subscribe(params => {
      this.brand = params.get('brand') || 'cah';
      console.log('Brand:', this.brand);
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

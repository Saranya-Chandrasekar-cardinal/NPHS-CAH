import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

// Import mock data from data folder
import { MOCK_TASKS, MOCK_NOTIFICATIONS, Task, Notification } from '../../data/mock-data';
import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { TitleDescriptionComponent } from '@shared/components/title-description/title-description.component';
import { ITitleDescription, MOCK_HOME_PAGE } from 'src/app/data/title-description';
import { TileComponent } from '@shared/components/tile/tile.component';
import { ITileDetails, MOCK_HOME_NAV_LIST } from 'src/app/data/tile-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, PageLayoutComponent, TitleDescriptionComponent, TileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  notifications: Notification[] = [];
  homePage: ITitleDescription = MOCK_HOME_PAGE;
  navList: ITileDetails[] = MOCK_HOME_NAV_LIST;
   brand: string = '';

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    // to get brand name
        this.route.paramMap.subscribe(params => {
      this.brand = params.get('brand') || 'cah';
      console.log('Brand:', this.brand);
    });

    // Load data from mock data files
    this.tasks = MOCK_TASKS;
    this.notifications = MOCK_NOTIFICATIONS;
  }
  
}

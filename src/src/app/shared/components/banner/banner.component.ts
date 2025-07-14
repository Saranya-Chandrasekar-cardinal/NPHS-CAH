import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IBanner, MOCK_BANNER_LIST } from 'src/app/data/banner-details';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  bannerList: IBanner[] = MOCK_BANNER_LIST;
}

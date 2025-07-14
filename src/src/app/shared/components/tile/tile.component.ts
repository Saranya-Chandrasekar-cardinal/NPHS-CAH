import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ITileDetails } from 'src/app/data/tile-details';

@Component({
  selector: 'app-tile',
  imports: [MatCardModule, CommonModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
@Input() list: ITileDetails[] = [];

constructor(private router: Router) { }

navigateToSection(section: string) {
    console.log(`Navigating to ${section} section`);
    if (section === '/ordering') {
      this.router.navigate(['/ordering']);
    } else if (section === '/patients') {
      this.router.navigate(['/patients']);
      // For patients section, show alert for now
      alert(`Navigation to ${section} section - This would be implemented in a real application`);
    } else if (section === 'preferences') {
      // For preferences section, show alert for now
      alert(`Navigation to ${section} section - This would be implemented in a real application`);
    } else {
      // For other sections, show alert for now
      this.router.navigate(['/other']);
      alert(`Navigation to ${section} section - This would be implemented in a real application`);
    }
  }
}

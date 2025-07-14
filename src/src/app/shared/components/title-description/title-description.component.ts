import { Component, Input } from '@angular/core';
import { ITitleDescription } from 'src/app/data/title-description';

@Component({
  selector: 'app-title-description',
  imports: [],
  templateUrl: './title-description.component.html',
  styleUrl: './title-description.component.scss'
})
export class TitleDescriptionComponent {
  @Input() data: ITitleDescription = {
    title: '',
    description: ''
  };

}

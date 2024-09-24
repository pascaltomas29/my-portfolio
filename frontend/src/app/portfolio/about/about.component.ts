import { Component } from '@angular/core';

import { personalData } from '../../shared/constants/appConstants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  personalData = personalData;
}

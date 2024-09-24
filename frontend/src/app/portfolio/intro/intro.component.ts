import { Component } from '@angular/core';

import { personalData } from '../../shared/constants/appConstants';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  personalData = personalData;

}

import { Component } from '@angular/core';
import { SplitPipe } from '../split.pipe';

import { workExperience } from '../../shared/constants/appConstants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SplitPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  workExperience = workExperience;

}

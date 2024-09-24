import { Component } from '@angular/core';

import { education } from '../../shared/constants/appConstants';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = education;
}

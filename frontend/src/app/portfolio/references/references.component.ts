import { Component } from '@angular/core';
import { references } from '../../shared/constants/appConstants';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  firstReference = references[0];
  references = references.slice(1);

}

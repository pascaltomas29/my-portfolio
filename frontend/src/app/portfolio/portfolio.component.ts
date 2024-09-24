import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ReferencesComponent } from './references/references.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [AboutComponent, ContactComponent, EducationComponent, ExperienceComponent, 
              FooterComponent, HeaderComponent, IntroComponent, ReferencesComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}

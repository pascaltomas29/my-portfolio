import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { personalData } from '../../shared/constants/appConstants';

import { SendEmail } from '../../shared/models/email.model';

import { EmailService } from '../../shared/services/EmailService';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  constructor(private emailService: EmailService) {

  }

  personalData = personalData;
  model = new SendEmail('', '', '', '');

  onSubmit(f: NgForm) {
    this.emailService.sendEmail(this.model)
    .subscribe(data => {
      console.log(data);
      if(data === 'OK'){
        alert('Email sent');
      }
    });
    f.resetForm();
  }

}

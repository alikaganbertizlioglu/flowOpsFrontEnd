import { Component } from '@angular/core';

@Component({
  selector: 'app-resignation-form',
  templateUrl: './resignation-form.component.html',
  styleUrl: './resignation-form.component.scss'
})
export class ResignationFormComponent {

  formData = {
    nameSurname: '',
    tcNumber: '',
    workplacePosition: '',
    resignationReason: '',
    lastWorkingDay:'',   
  };

  submitForm() {
    console.log('Form submitted with data:', this.formData);
    // You can perform further actions like sending data to a server here
  }

}

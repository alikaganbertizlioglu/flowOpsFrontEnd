import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-motivation-form',
  templateUrl: './employee-motivation-form.component.html',
  styleUrl: './employee-motivation-form.component.scss'
})
export class EmployeeMotivationFormComponent {

  formData = {
    nameSurname: '',
    tcNumber: '',
    workplacePosition: '',
    selectedDuration: '',
    difficulty:'',
    focus:'',
    satisfied:''

  };


  submitForm() {
    console.log('Form submitted with data:', this.formData);
    // You can perform further actions like sending data to a server here
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-leave-form',
  templateUrl: './annual-leave-form.component.html',
  styleUrl: './annual-leave-form.component.scss'
})
export class AnnualLeaveFormComponent {
  formData = {
    nameSurname: '',
    tcNumber: '',
    workplacePosition: '',
    izinTuru: '',
    izinGunSayisi: 0,
    izinBaslangicTarihi: '',
    izinBitisTarihi: '',
    goreveBaslayacagiTarih: ''
  };

  submitForm() {
    console.log('Form submitted with data:', this.formData);
    // You can perform further actions like sending data to a server here
  }

}

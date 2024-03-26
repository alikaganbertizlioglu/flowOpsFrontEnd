import { Component } from '@angular/core';

@Component({
  selector: 'app-vacation-request-form',
  templateUrl: './vacation-request-form.component.html',
  styleUrl: './vacation-request-form.component.scss'
})
export class VacationRequestFormComponent {
  formData = {
    nameSurname: '',
    tcNumber: '',
    workplacePosition: '',
    tatilBilgisi: '',
    izinGunSayisi: 0,
    izinBaslangicTarihi: '',
    izinBitisTarihi: '',
    goreveBaslayacagiTarih: '',
    gonderilecekKisi: '',
  };

  submitForm() {
    console.log('Form submitted with data:', this.formData);
    // You can perform further actions like sending data to a server here
  }
}

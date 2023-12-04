import { Component } from '@angular/core';
import { TranslationService } from '../../services/translate/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private translateService: TranslationService) {
    
  }

  switchLanguage() {
    this.translateService.switchLanguage();
  }
}

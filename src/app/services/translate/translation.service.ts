import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  switchLanguage() {
    this.translateService.use(this.translateService.currentLang === 'en' ? 'tr' : 'en');
  }
}

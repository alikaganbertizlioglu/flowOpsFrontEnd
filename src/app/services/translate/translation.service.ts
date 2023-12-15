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

  switchToEN() {
    this.translateService.use('en');
  }

  switchToTR() {
    this.translateService.use('tr');
  }
}

import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { TranslationService } from '../../services/translate/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService, private translateService: TranslationService) { }

  switchLanguage() {
    this.translateService.switchLanguage();
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
  deneme(){
    console.log("test");
  }
}

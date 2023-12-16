import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { TranslationService } from '../../services/translate/translation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private themeService: ThemeService, private translateService: TranslationService, private router: Router) { }

  switchToEN() {
    this.translateService.switchToEN();
  }

  switchToTR() {
    this.translateService.switchToTR();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}

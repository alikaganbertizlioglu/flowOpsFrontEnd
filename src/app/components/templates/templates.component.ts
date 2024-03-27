import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  constructor(private router: Router) {}

  navigateToDestination() {
    this.router.navigate(['/home']); 
  }

  navigateToAnnualLeaveForm() {
    this.router.navigate(['/annual-leave-form']);
  }

  navigateToVacationRequestForm(){
    this.router.navigate(['/vacation-request-form']);
  }

  navigateToResignationForm(){
    this.router.navigate(['/resignation-form']);
  }


}
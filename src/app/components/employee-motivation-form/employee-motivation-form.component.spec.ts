import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMotivationFormComponent } from './employee-motivation-form.component';

describe('EmployeeMotivationFormComponent', () => {
  let component: EmployeeMotivationFormComponent;
  let fixture: ComponentFixture<EmployeeMotivationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeMotivationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeMotivationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

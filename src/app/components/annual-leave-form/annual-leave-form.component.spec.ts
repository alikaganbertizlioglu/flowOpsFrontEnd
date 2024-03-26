import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualLeaveFormComponent } from './annual-leave-form.component';

describe('AnnualLeaveFormComponent', () => {
  let component: AnnualLeaveFormComponent;
  let fixture: ComponentFixture<AnnualLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnualLeaveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnualLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

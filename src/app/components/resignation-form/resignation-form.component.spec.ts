import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignationFormComponent } from './resignation-form.component';

describe('ResignationFormComponent', () => {
  let component: ResignationFormComponent;
  let fixture: ComponentFixture<ResignationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResignationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResignationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

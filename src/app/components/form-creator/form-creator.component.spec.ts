import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatorComponent } from './form-creator.component';

describe('FormCreatorComponent', () => {
  let component: FormCreatorComponent;
  let fixture: ComponentFixture<FormCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

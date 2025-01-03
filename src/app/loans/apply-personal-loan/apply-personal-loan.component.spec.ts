import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPersonalLoanComponent } from './apply-personal-loan.component';

describe('ApplyPersonalLoanComponent', () => {
  let component: ApplyPersonalLoanComponent;
  let fixture: ComponentFixture<ApplyPersonalLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyPersonalLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyPersonalLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

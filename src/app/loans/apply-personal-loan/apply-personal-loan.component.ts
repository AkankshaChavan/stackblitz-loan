import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apply-personal-loan',
  standalone: true,
  imports: [ToastModule, CardModule, CommonModule, ReactiveFormsModule],
  templateUrl: './apply-personal-loan.component.html',
  styleUrl: './apply-personal-loan.component.css'
})
export class ApplyPersonalLoanComponent {

  secondForm: FormGroup;

  constructor(){
    this.secondForm = new FormGroup({

    })
  }

  onSubmit(){}

}

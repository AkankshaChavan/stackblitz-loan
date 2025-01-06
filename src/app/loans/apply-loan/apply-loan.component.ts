import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';  
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  standalone: true,
  imports: [RadioButtonModule, CommonModule, FormsModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './apply-loan.component.html',
  styleUrl: './apply-loan.component.css'
})
export class ApplyLoanComponent implements OnInit 
{

  loan: any;

  firstForm: FormGroup;

    categories: any[] = [
        { name: 'Personal Loan' },
        { name: 'Home Loan' },
        { name: 'Gold Loan' },
        { name: 'Student Loan' },
        { name: 'Small Business Loan' },
        { name: 'Student Loan' },
        { name: 'Student Loan' },
        { name: 'Fixed Deposit Loan' }
    ];

    constructor(private router:Router) {
        this.firstForm = new FormGroup({
            selectedCategory: new FormControl('', [Validators.required])
        });
    }

    ngOnInit(): void 
    {
    }

    onSubmit(){
      if (this.firstForm.valid) {
        this.firstForm.reset();
        console.log('Fisrt form submitted!');
        this.router.navigate(['apply-personal-loan']);
      }
      else {
        console.log('First Invalid Form Submission');
      }
        
    }

}

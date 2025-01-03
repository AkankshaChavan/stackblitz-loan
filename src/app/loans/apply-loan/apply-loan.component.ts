import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-apply-loan',
  standalone: true,
  imports: [RadioButtonModule, CommonModule, BrowserModule, FormsModule],
  templateUrl: './apply-loan.component.html',
  styleUrl: './apply-loan.component.css'
})
export class ApplyLoanComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit(): void 
    {
    }

    onSubmit(){
        this.router.navigate(['/']);
    }


}

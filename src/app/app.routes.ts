import { Routes } from '@angular/router';
import { ApplyLoanComponent } from './loans/apply-loan/apply-loan.component';
import { ApplyPersonalLoanComponent } from './loans/apply-personal-loan/apply-personal-loan.component';

export const routes: Routes = [
    { path: '', component: ApplyLoanComponent},
    { path: 'apply-personal-loan', component: ApplyPersonalLoanComponent }
];

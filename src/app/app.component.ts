import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { ApplyLoanComponent } from './loans/apply-loan/apply-loan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HeaderComponent, ApplyLoanComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-app';
}

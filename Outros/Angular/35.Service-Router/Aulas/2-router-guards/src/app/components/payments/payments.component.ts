import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  
  isWalletBlocked: boolean = false
  private readonly router = inject(Router)
  private readonly activatedRoute = inject(ActivatedRoute)
  
  navigate(path: string) {
    this.router.navigate([path], { relativeTo: this.activatedRoute }).then((success) => {
      
      if (success === true) {
        this.isWalletBlocked = false;
        return;
      } else if (success === false) {
        this.router.navigate(['/dashboard/payments'])
        this.isWalletBlocked = true
        return;
      }
    })
  }
}

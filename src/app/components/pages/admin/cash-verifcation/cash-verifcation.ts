import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../Material.Module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Payment } from '../../../../services/payment';

@Component({
  selector: 'app-cash-verifcation',
  imports: [MaterialModule,FormsModule,CommonModule],
  templateUrl: './cash-verifcation.html',
  styleUrl: './cash-verifcation.scss',
})
export class CashVerifcation implements OnInit {

  constructor(private paymentService : Payment){
     console.log('CashVerification constructor called');
  }

 displayedColumns: string[] = [
    'paymentId',
    'policyId',
    'premiumScheduleId',
    'amount',
    'paymentMode',
    'paymentStatus',
    // 'transactionId',
    'actions'
  ];

  payments: any[] = [];
  loading = false;
  errorMessage = '';

 

  ngOnInit(): void {
     console.log('CashVerification ngOnInit called');
    this.loadPendingCashPayments();
  }

  loadPendingCashPayments(): void {
    this.loading = true;

    this.paymentService.getPendingPayment().subscribe({
      next: (res) => {
        console.log('API RESPONSE', res);
      this.payments = res.data || res;
        
        this.loading = false;
      },
      error: (err) => {
        console.log("Api err", err);
        
        this.errorMessage = err.error?.message || 'Failed to load pending cash payments';
        this.loading = false;
      }
    });
  }

    verify(paymentId: number): void {
    if (!confirm('Are you sure you want to verify this cash payment?')) {
      return;
    }

    this.paymentService.verifyCashPayment(paymentId).subscribe({
      next: () => {
        alert('Cash payment verified successfully');
        this.loadPendingCashPayments();
      },
      error: (err) => {
        alert(err.error?.message || 'Verification failed');
      }
    });
  }

  reject(paymentId: number): void {
    const remarks = prompt('Enter rejection reason');

    if (!remarks) {
      return;
    }

    this.paymentService.rejectCashPayment(paymentId, remarks).subscribe({
      next: () => {
        alert('Cash payment rejected successfully');
        this.loadPendingCashPayments();
      },
      error: (err) => {
        alert(err.error?.message || 'Rejection failed');
      }
    });
  }


}

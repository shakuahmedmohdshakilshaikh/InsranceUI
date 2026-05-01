import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../../services/payment';
import { MaterialModule } from '../../../../Material.Module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-history',
  imports: [MaterialModule,FormsModule,CommonModule],
  templateUrl: './payment-history.html',
  styleUrl: './payment-history.scss',
})
export class PaymentHistory implements OnInit {
  payments: any[] = [];

  loading = false;
  errorMessage = '';

  filterType = 'all';
  searchId: number | null = null;

  displayedColumns: string[] = [
    'paymentId',
    'policyNumber',
    'customerName',
    'policyTypeName',
    'premiumScheduleId',
    'amount',
    'paymentMode',
    'paymentStatus'
  ];

  constructor(private paymentService: Payment) {}

  ngOnInit(): void {
    this.loadAllPayments();
  }

  loadAllPayments(): void {
    this.loading = true;
    this.errorMessage = '';
    this.filterType = 'all';
    this.searchId = null;

    this.paymentService.getAllPayments().subscribe({
      next: (res) => {
        console.log('All payments:', res);
        this.payments = res.data || [];
        this.loading = false;
      },
      error: (err) => {
        console.log('Payment history error:', err);
        this.errorMessage = err.error?.message || 'Failed to load payment history';
        this.loading = false;
      }
    });
  }

  search(): void {
    if (!this.searchId) {
      alert('Please enter id');
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    if (this.filterType === 'policy') {
      this.paymentService.getPaymentsByPolicyId(this.searchId).subscribe({
        next: (res) => {
          this.payments = res.data || [];
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to load policy payments';
          this.loading = false;
        }
      });
    }

    if (this.filterType === 'premium') {
      this.paymentService.getPaymentsByPremiumId(this.searchId).subscribe({
        next: (res) => {
          this.payments = res.data || [];
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to load premium payments';
          this.loading = false;
        }
      });
    }

    if (this.filterType === 'payment') {
      this.paymentService.getPaymentById(this.searchId).subscribe({
        next: (res) => {
          this.payments = res.data ? [res.data] : [];
          this.loading = false;
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Failed to load payment';
          this.loading = false;
        }
      });
    }
  }

  getTotalAmount(): number {
    return this.payments.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }

  getSuccessCount(): number {
    return this.payments.filter(x => x.paymentStatus === 'Success').length;
  }

  getPendingCount(): number {
    return this.payments.filter(x => x.paymentStatus === 'Pending').length;
  }
}

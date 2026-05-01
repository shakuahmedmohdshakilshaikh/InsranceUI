import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../Material.Module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Payment } from '../../../../services/payment';

@Component({
  selector: 'app-premium-history',
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './premium-history.html',
  styleUrl: './premium-history.scss',
})
export class PremiumHistory implements OnInit {

  displayedColumns: string[] = [
    'premiumScheduleId',
    'policyId',
    'premiumAmount',
    'dueDate',
    'status'
  ];

  premiums: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private paymentService: Payment) {
    console.log('PremiumHistory constructor called');
  }

  ngOnInit(): void {
    console.log('PremiumHistory ngOnInit called');
    this.loadAllPremiums();
  }

  loadAllPremiums(): void {
    this.loading = true;
    // You can use getAllPayments() to get premium data
    this.paymentService.getAllPayments().subscribe({
      next: (res) => {
        console.log('Premium History API RESPONSE', res);
        this.premiums = res.data || res;
        this.loading = false;
      },
      error: (err) => {
        console.log("Premium History API error", err);
        this.errorMessage = err.error?.message || 'Failed to load premium history';
        this.loading = false;
      }
    });
  }
}

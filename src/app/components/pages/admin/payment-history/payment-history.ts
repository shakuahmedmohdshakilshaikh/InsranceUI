import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../Material.Module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Payment } from '../../../../services/payment';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payment-history',
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './payment-history.html',
  styleUrl: './payment-history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentHistory implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'paymentId',
    'policyNumber',
    'policyTypeName',
    'customerName',
    'premiumScheduleId',
    'amount',
    'paymentMode'
  ];

  dataSource = new MatTableDataSource<any>([]);
  loading = false;
  errorMessage = '';

  constructor(private paymentService: Payment, private cdr: ChangeDetectorRef) {
    console.log('PaymentHistory constructor called');
  }

  ngOnInit(): void {
    console.log('PaymentHistory ngOnInit called');
    this.loadAllPayments();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadAllPayments(): void {
    this.loading = true;
    this.paymentService.getAllPayments().subscribe({
      next: (res) => {
        console.log('Payment History API RESPONSE', res);
        const data = res.data || res;
        this.dataSource.data = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.log("Payment History API error", err);
        this.errorMessage = err.error?.message || 'Failed to load payment history';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
      
   


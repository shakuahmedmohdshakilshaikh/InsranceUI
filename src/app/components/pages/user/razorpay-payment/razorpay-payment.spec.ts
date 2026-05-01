import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorpayPayment } from './razorpay-payment';

describe('RazorpayPayment', () => {
  let component: RazorpayPayment;
  let fixture: ComponentFixture<RazorpayPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazorpayPayment],
    }).compileComponents();

    fixture = TestBed.createComponent(RazorpayPayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

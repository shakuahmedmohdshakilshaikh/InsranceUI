import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectCashPayment } from './collect-cash-payment';

describe('CollectCashPayment', () => {
  let component: CollectCashPayment;
  let fixture: ComponentFixture<CollectCashPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectCashPayment],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectCashPayment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

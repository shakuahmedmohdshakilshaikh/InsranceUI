import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashVerifcation } from './cash-verifcation';

describe('CashVerifcation', () => {
  let component: CashVerifcation;
  let fixture: ComponentFixture<CashVerifcation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashVerifcation],
    }).compileComponents();

    fixture = TestBed.createComponent(CashVerifcation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

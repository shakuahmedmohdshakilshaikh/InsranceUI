import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePolicyTypes } from './manage-policy-types';

describe('ManagePolicyTypes', () => {
  let component: ManagePolicyTypes;
  let fixture: ComponentFixture<ManagePolicyTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePolicyTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePolicyTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

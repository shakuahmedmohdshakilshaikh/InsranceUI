import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePolicies } from './manage-policies';

describe('ManagePolicies', () => {
  let component: ManagePolicies;
  let fixture: ComponentFixture<ManagePolicies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePolicies],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePolicies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

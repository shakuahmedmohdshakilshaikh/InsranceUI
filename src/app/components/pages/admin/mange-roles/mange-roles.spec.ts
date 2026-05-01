import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeRoles } from './mange-roles';

describe('MangeRoles', () => {
  let component: MangeRoles;
  let fixture: ComponentFixture<MangeRoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangeRoles],
    }).compileComponents();

    fixture = TestBed.createComponent(MangeRoles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

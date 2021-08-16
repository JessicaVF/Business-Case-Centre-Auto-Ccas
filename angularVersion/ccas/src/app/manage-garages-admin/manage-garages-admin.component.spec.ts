import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGaragesAdminComponent } from './manage-garages-admin.component';

describe('ManageGaragesAdminComponent', () => {
  let component: ManageGaragesAdminComponent;
  let fixture: ComponentFixture<ManageGaragesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageGaragesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGaragesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

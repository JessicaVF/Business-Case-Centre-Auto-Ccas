import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAnnoncesAdminComponent } from './manage-annonces-admin.component';

describe('ManageAnnoncesAdminComponent', () => {
  let component: ManageAnnoncesAdminComponent;
  let fixture: ComponentFixture<ManageAnnoncesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAnnoncesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAnnoncesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

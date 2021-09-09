import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyAnnoncesComponent } from './manage-my-annonces.component';

describe('ManageMyAnnoncesComponent', () => {
  let component: ManageMyAnnoncesComponent;
  let fixture: ComponentFixture<ManageMyAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMyAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMyAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

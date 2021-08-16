import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyAnnoncesByGaragesComponent } from './manage-my-annonces-by-garages.component';

describe('ManageMyAnnoncesByGaragesComponent', () => {
  let component: ManageMyAnnoncesByGaragesComponent;
  let fixture: ComponentFixture<ManageMyAnnoncesByGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMyAnnoncesByGaragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMyAnnoncesByGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

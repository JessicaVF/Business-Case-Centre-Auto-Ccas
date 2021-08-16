import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyGaragesComponent } from './manage-my-garages.component';

describe('ManageMyGaragesComponent', () => {
  let component: ManageMyGaragesComponent;
  let fixture: ComponentFixture<ManageMyGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMyGaragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMyGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

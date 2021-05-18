import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLodevieComponent } from './contact-lodevie.component';

describe('ContactLodevieComponent', () => {
  let component: ContactLodevieComponent;
  let fixture: ComponentFixture<ContactLodevieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLodevieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLodevieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

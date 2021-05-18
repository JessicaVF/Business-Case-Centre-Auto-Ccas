import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePreviewComponent } from './annonce-preview.component';

describe('AnnoncePreviewComponent', () => {
  let component: AnnoncePreviewComponent;
  let fixture: ComponentFixture<AnnoncePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

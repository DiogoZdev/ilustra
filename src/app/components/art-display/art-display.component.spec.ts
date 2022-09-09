import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDisplayComponent } from './art-display.component';

describe('ArtDisplayComponent', () => {
  let component: ArtDisplayComponent;
  let fixture: ComponentFixture<ArtDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

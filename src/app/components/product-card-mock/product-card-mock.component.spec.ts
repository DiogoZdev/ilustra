import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardMockComponent } from './product-card-mock.component';

describe('ProductCardMockComponent', () => {
  let component: ProductCardMockComponent;
  let fixture: ComponentFixture<ProductCardMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardMockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

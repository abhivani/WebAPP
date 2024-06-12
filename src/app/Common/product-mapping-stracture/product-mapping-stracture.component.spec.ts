import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMappingStractureComponent } from './product-mapping-stracture.component';

describe('ProductMappingStractureComponent', () => {
  let component: ProductMappingStractureComponent;
  let fixture: ComponentFixture<ProductMappingStractureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductMappingStractureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMappingStractureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

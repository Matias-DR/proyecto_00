import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProductComponent } from './std-product.component';

describe('StdProductComponent', () => {
  let component: StdProductComponent;
  let fixture: ComponentFixture<StdProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

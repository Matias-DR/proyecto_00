import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProductListComponent } from './std-product-list.component';

describe('StdProductListComponent', () => {
  let component: StdProductListComponent;
  let fixture: ComponentFixture<StdProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProductFactoryComponent } from './std-product-factory.component';

describe('StdProductFactoryComponent', () => {
  let component: StdProductFactoryComponent;
  let fixture: ComponentFixture<StdProductFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdProductFactoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdProductFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

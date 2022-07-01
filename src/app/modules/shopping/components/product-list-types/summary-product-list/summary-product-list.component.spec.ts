import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryProductListComponent } from './summary-product-list.component';

describe('SummaryProductListComponent', () => {
  let component: SummaryProductListComponent;
  let fixture: ComponentFixture<SummaryProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

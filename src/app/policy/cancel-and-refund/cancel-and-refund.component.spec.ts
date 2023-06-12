import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelAndRefundComponent } from './cancel-and-refund.component';

describe('CancelAndRefundComponent', () => {
  let component: CancelAndRefundComponent;
  let fixture: ComponentFixture<CancelAndRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelAndRefundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelAndRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

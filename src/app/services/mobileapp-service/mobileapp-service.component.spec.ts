import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappServiceComponent } from './mobileapp-service.component';

describe('MobileappServiceComponent', () => {
  let component: MobileappServiceComponent;
  let fixture: ComponentFixture<MobileappServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileappServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileappServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

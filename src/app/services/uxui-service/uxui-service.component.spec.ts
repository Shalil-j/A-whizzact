import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxuiServiceComponent } from './uxui-service.component';

describe('UxuiServiceComponent', () => {
  let component: UxuiServiceComponent;
  let fixture: ComponentFixture<UxuiServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UxuiServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxuiServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

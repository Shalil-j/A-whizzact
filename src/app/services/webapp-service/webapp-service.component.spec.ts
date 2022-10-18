import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappServiceComponent } from './webapp-service.component';

describe('WebappServiceComponent', () => {
  let component: WebappServiceComponent;
  let fixture: ComponentFixture<WebappServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebappServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

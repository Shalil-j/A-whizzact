import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWhizzactComponent } from './why-whizzact.component';

describe('WhyWhizzactComponent', () => {
  let component: WhyWhizzactComponent;
  let fixture: ComponentFixture<WhyWhizzactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWhizzactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWhizzactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

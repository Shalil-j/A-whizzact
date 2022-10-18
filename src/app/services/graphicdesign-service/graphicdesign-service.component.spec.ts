import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdesignServiceComponent } from './graphicdesign-service.component';

describe('GraphicdesignServiceComponent', () => {
  let component: GraphicdesignServiceComponent;
  let fixture: ComponentFixture<GraphicdesignServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdesignServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicdesignServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

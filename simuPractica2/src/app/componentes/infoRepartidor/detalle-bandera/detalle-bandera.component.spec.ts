import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBanderaComponent } from './detalle-bandera.component';

describe('DetalleBanderaComponent', () => {
  let component: DetalleBanderaComponent;
  let fixture: ComponentFixture<DetalleBanderaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleBanderaComponent]
    });
    fixture = TestBed.createComponent(DetalleBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

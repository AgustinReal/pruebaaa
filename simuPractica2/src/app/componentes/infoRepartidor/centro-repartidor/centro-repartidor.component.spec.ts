import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroRepartidorComponent } from './centro-repartidor.component';

describe('CentroRepartidorComponent', () => {
  let component: CentroRepartidorComponent;
  let fixture: ComponentFixture<CentroRepartidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentroRepartidorComponent]
    });
    fixture = TestBed.createComponent(CentroRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

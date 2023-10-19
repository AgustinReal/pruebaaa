import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralPizzaComponent } from './central-pizza.component';

describe('CentralPizzaComponent', () => {
  let component: CentralPizzaComponent;
  let fixture: ComponentFixture<CentralPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralPizzaComponent]
    });
    fixture = TestBed.createComponent(CentralPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

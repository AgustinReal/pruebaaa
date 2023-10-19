import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopaisesComponent } from './listadopaises.component';

describe('ListadopaisesComponent', () => {
  let component: ListadopaisesComponent;
  let fixture: ComponentFixture<ListadopaisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadopaisesComponent]
    });
    fixture = TestBed.createComponent(ListadopaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

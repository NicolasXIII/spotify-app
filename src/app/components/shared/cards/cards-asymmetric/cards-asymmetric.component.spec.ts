import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAsymmetricComponent } from './cards-asymmetric.component';

describe('CardsAsymmetricComponent', () => {
  let component: CardsAsymmetricComponent;
  let fixture: ComponentFixture<CardsAsymmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsAsymmetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAsymmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

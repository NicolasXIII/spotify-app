import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsChangeSymmetryComponent } from './cards-change-symmetry.component';

describe('CardsChangeSymmetryComponent', () => {
  let component: CardsChangeSymmetryComponent;
  let fixture: ComponentFixture<CardsChangeSymmetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsChangeSymmetryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsChangeSymmetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

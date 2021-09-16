import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSymmetricComponent } from './cards-symmetric.component';

describe('CardsSymmetricComponent', () => {
  let component: CardsSymmetricComponent;
  let fixture: ComponentFixture<CardsSymmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSymmetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSymmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperVinylDiskComponent } from './swiper-vinyl-disk.component';

describe('SwiperVinylDiskComponent', () => {
  let component: SwiperVinylDiskComponent;
  let fixture: ComponentFixture<SwiperVinylDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperVinylDiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperVinylDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

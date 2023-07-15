import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailGameComponent } from './trail-game.component';

describe('TrailGameComponent', () => {
  let component: TrailGameComponent;
  let fixture: ComponentFixture<TrailGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

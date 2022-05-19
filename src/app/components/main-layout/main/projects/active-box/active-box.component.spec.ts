import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBoxComponent } from './active-box.component';

describe('ActiveBoxComponent', () => {
  let component: ActiveBoxComponent;
  let fixture: ComponentFixture<ActiveBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MogoComponent } from './mogo.component';

describe('MogoComponent', () => {
  let component: MogoComponent;
  let fixture: ComponentFixture<MogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

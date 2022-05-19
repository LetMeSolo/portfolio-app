import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BildCompanyComponent } from './bild-company.component';

describe('BildCompanyComponent', () => {
  let component: BildCompanyComponent;
  let fixture: ComponentFixture<BildCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BildCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BildCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

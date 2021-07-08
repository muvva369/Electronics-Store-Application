import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollServiceComponent } from './enroll-service.component';

describe('EnrollServiceComponent', () => {
  let component: EnrollServiceComponent;
  let fixture: ComponentFixture<EnrollServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

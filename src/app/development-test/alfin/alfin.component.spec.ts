import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfinComponent } from './alfin.component';

describe('AlfinComponent', () => {
  let component: AlfinComponent;
  let fixture: ComponentFixture<AlfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlfinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodyaComponent } from './godya.component';

describe('GodyaComponent', () => {
  let component: GodyaComponent;
  let fixture: ComponentFixture<GodyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

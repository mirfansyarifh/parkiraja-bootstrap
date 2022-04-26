import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrfanComponent } from './irfan.component';

describe('IrfanComponent', () => {
  let component: IrfanComponent;
  let fixture: ComponentFixture<IrfanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrfanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrfanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

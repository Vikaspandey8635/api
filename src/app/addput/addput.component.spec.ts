import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddputComponent } from './addput.component';

describe('AddputComponent', () => {
  let component: AddputComponent;
  let fixture: ComponentFixture<AddputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

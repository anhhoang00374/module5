import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMeanComponent } from './display-mean.component';

describe('DislayMeanComponent', () => {
  let component: DisplayMeanComponent;
  let fixture: ComponentFixture<DisplayMeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

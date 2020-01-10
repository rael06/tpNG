import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomerComponent } from './zoomer.component';

describe('ZoomerComponent', () => {
  let component: ZoomerComponent;
  let fixture: ComponentFixture<ZoomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

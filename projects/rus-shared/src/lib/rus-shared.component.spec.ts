import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RusSharedComponent } from './rus-shared.component';

describe('RusSharedComponent', () => {
  let component: RusSharedComponent;
  let fixture: ComponentFixture<RusSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RusSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RusSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

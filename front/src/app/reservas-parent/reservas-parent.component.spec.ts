import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasParentComponent } from './reservas-parent.component';

describe('ReservasParentComponent', () => {
  let component: ReservasParentComponent;
  let fixture: ComponentFixture<ReservasParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

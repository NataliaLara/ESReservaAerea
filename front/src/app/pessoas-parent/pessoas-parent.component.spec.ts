import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasParentComponent } from './pessoas-parent.component';

describe('PessoasParentComponent', () => {
  let component: PessoasParentComponent;
  let fixture: ComponentFixture<PessoasParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

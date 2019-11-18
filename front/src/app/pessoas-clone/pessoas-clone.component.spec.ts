import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCloneComponent } from './pessoas-clone.component';

describe('PessoasCloneComponent', () => {
  let component: PessoasCloneComponent;
  let fixture: ComponentFixture<PessoasCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

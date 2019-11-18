import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesParentComponent } from './cidades-parent.component';

describe('CidadesParentComponent', () => {
  let component: CidadesParentComponent;
  let fixture: ComponentFixture<CidadesParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

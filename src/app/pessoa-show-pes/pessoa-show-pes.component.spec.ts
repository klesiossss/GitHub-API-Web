import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaShowPesComponent } from './pessoa-show-pes.component';

describe('PessoaShowPesComponent', () => {
  let component: PessoaShowPesComponent;
  let fixture: ComponentFixture<PessoaShowPesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaShowPesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaShowPesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaAddEditPesComponent } from './pessoa-add-edit-pes.component';

describe('PessoaAddEditPesComponent', () => {
  let component: PessoaAddEditPesComponent;
  let fixture: ComponentFixture<PessoaAddEditPesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaAddEditPesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaAddEditPesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

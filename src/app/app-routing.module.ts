import { PessoaComponent } from './pessoa/pessoa.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path:'pessoa', component : PessoaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

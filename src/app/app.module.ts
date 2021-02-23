import { SharedService } from './shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaShowPesComponent } from './pessoa-show-pes/pessoa-show-pes.component';
import { PessoaAddEditPesComponent } from './pessoa-add-edit-pes/pessoa-add-edit-pes.component';

import { HttpClientModule}   from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaShowPesComponent,
    PessoaAddEditPesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

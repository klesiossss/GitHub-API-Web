import { Moment } from 'moment';
 
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from "./../Model/Pessoa";
import { Genero } from '../Model/Genero';


@Component({
  selector: 'app-pessoa-show-pes',
  templateUrl: './pessoa-show-pes.component.html',
  styleUrls: ['./pessoa-show-pes.component.css']
})
export class PessoaShowPesComponent implements OnInit {

  constructor( private service: SharedService) { }
   
  public persons : Pessoa[] =[];
  
  ModalTitle:string = " ";
  ActivateAddEditPesComp: boolean = false;
   pes: any;

  ngOnInit(): void {
    this.refreshPesList();
  }

  addClick(){
    this.pes = {
      id : 0,
      nome : "",
      cpf: "",
      email: "",
      dataNasc: new Date(),
      genero: Genero.MASCULINO,
      naturalidade:"",
      nacionalidade:""
    }
    this.ModalTitle = "Add Pessoa";
    this.ActivateAddEditPesComp = true;
  }

  aditClick(item: any){
    this.pes = item;
    this.ModalTitle = "Edit Pessoa";
    this.ActivateAddEditPesComp = true;
  }

  closeClick(){
    this.ActivateAddEditPesComp = false;
    this.refreshPesList();
  }


  refreshPesList(){
    this.service.getPessoaList().subscribe( (data:any) => {
      this.persons = data;
    })
  }

  deleteClick(item:any){

  if(confirm('tem certeza??')){
    this.service.deletePessoa(item).subscribe((data:any)=>{
      alert(data.toString);
      this.refreshPesList();
    })
  }
}


}

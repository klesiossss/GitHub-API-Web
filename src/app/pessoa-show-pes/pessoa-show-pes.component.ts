
 
import { SharedService } from './../shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from "./../Model/Pessoa";



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
    console.log(this.refreshPesList());
  }

  addClick(){
    this.pes = {
      id : 0,
      login : "",
      follower: 0,
      publicRepo: 0

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
    this.service.getPessoaList().subscribe( data => {
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

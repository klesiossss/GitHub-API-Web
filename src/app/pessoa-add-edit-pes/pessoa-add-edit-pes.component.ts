import { SharedService } from './../shared.service';
import { PessoaShowPesComponent } from './../pessoa-show-pes/pessoa-show-pes.component';
import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../Model/Pessoa';
import { Genero } from '././../Model/Genero';

@Component({
  selector: 'app-pessoa-add-edit-pes',
  templateUrl: './pessoa-add-edit-pes.component.html',
  styleUrls: ['./pessoa-add-edit-pes.component.css']
})
export class PessoaAddEditPesComponent implements OnInit {   
    
 @Input() pes:any;
  id!: string;
  nome!:string;
  cpf!:string;
  email!:string;
  dataNascimento!:string;
  genero!: string;
  nacionalidade!:string;
  naturalidade!:string;

  

  pessoas : Pessoa[] =[];
  constructor (private service:SharedService) { }
  
  ngOnInit(): void {
    this.id=this.pes.id;
    this.nome = this.pes.nome;
    this.cpf = this.pes.cpf;
    this.email = this.pes.email;
    this.genero = this.pes.genero;
    this.dataNascimento=this.pes.dataNascimento;
    this.naturalidade = this.pes.naturalidade;
    this.nacionalidade = this.pes.nacionalidade;

    this.refreshPessoas();
  
   }

   refreshPessoas(){
     this.service.getPessoaList()
        .subscribe(res =>{
          console.log(res)
          this.pessoas=res;
        });
   }
   

  public addPessoa(){
    var val={
      id:this.id,
      nome:this.nome,
      cpf:this.cpf,
      email:this.email,
      genero:this.genero,
      dataNascimento:this.dataNascimento,
      naturalidade:this.naturalidade,
      nacionalidade:this.nacionalidade
    }

   var res = this.service.addPessoa(val).subscribe(res =>{
     console.log(res)
      alert(res.toString());
      this.refreshPessoas();
      
      });
    }

    
  public updatePessoa(){
    var val={
      id : this.id,
      nome : this.nome,
      cpf : this.cpf,
      genero : this.genero,
      email : this.email,
      dataNascimento : this.dataNascimento,
      naturalidade : this.naturalidade,
      nacionalidade : this.nacionalidade
    }
    var res = this.service.updatePessoa(val).subscribe(res =>{
        alert(res.toString());
        this.refreshPessoas();
      });
  }

}

import { SharedService } from './../shared.service';
import { PessoaShowPesComponent } from './../pessoa-show-pes/pessoa-show-pes.component';
import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../Model/Pessoa';


@Component({
  selector: 'app-pessoa-add-edit-pes',
  templateUrl: './pessoa-add-edit-pes.component.html',
  styleUrls: ['./pessoa-add-edit-pes.component.css']
})
export class PessoaAddEditPesComponent implements OnInit {   
    
 @Input() pes:any;
  id!: string;
  login!:string;
  follower!:string;
  publicRepo!:string;
 

  

  pessoas : Pessoa[] =[];
  constructor (private service:SharedService) { }
  
  ngOnInit(): void {
    this.id=this.pes.id;
    this.login = this.pes.login;
    this.follower = this.pes.follower;
    this.publicRepo = this.pes.publicRepo;

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
      login:this.login,
      follower:this.follower,
      publicRepo : this.publicRepo
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
      login : this.login,
      follower : this.follower,
      publicRepo : this.publicRepo
      
    }
    var res = this.service.updatePessoa(val).subscribe(res =>{
        alert(res.toString());
        this.refreshPessoas();
      });
  }

}

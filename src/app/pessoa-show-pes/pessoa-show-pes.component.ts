
import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import Pessoa from "./../Model/Pessoa";


@Component({
  selector: 'app-pessoa-show-pes',
  templateUrl: './pessoa-show-pes.component.html',
  styleUrls: ['./pessoa-show-pes.component.css']
})
export class PessoaShowPesComponent implements OnInit {

  constructor( private service: SharedService) { }
   public persons : Pessoa[] =[];

  ngOnInit(): void {
    this.refreshPesList();
  }

  refreshPesList(){
    this.service.getPessoaList().subscribe( data => {
      this.persons = data;
    })
  }

}

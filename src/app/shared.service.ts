import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Pessoa from "./Model/Pessoa";


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:8080/pessoa";
  
   public pessoas : Pessoa[]=[];

  constructor(private http : HttpClient) { }

getPessoaList():Observable<Pessoa[]>{
  return this.http.get<Pessoa[]>(this.APIUrl+"/lista");
}


 addPessoa(val:Pessoa){
    return this.http.post(this.APIUrl,val);
  }

  updatePessoa(val:Pessoa){
    return this.http.put(this.APIUrl,val);
  }

  deletePessoa(val:Pessoa){
    return this.http.delete(this.APIUrl+val)
  }

}

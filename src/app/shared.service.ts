import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import  { Pessoa } from "./Model/Pessoa";
import {catchError, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:8080/pessoa";
  
   public pessoas : Pessoa[]=[];
   

  constructor(private http : HttpClient) { }

public getPessoaList():Observable<Pessoa[]>{
  return this.http.get<Pessoa[]>(this.APIUrl+"/lista");
}

   public updatePessoa(pessoa:any):Observable<any>{
    return this.http.put(this.APIUrl, pessoa);
  }

  public deletePessoa(id:any){
    return this.http.delete(this.APIUrl+id);
  
  }

   public addPessoa(pessoa: any):Observable<any>{
      return this.http.post<Pessoa>(this.APIUrl,pessoa);


    }

}
  
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import  { Pessoa } from "./Model/Pessoa";



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://34.72.199.87/dev";
  
   public pessoas : any[]=[];
   

  public constructor(private http : HttpClient) { }

public getPessoaList():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.APIUrl);
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
  
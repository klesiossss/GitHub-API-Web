import { identifierModuleUrl } from '@angular/compiler';
import { Genero } from './Genero';


export  class Pessoa {


    constructor (id:number,nome:string,cpf:string,email:string,dataNascimento:Date,genero:Genero,naturalidade:string,nacionalidade:string ){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.naturalidade = nacionalidade;
        this.nacionalidade = nacionalidade;
    }

    id?: number;
    nome: string;
    cpf: string;
    email: string;
    dataNascimento: Date;
    genero: Genero;
    naturalidade: string;
    nacionalidade: string; 
    

}





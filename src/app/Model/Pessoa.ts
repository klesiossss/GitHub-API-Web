
import {Moment} from 'moment';


export default interface Pessoa {
	id: number;
    nome: string;
    cpf:string;
    email:string;
    dataNascimento: Moment;
	genero: Genero;
    naturalidade: string;
    nacionalidade:string;
}

enum Genero {
    MASCULINO,
    FEMININO
}


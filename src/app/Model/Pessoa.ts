
export class Pessoa {


    public constructor (id:number,login:string, publicRepos:number,followers:number){
        this.id = id;
        this.login = login;
        this.followers = followers;
        this.publicRepos = publicRepos;
  
    }



    id!: number;
    login: string;
    followers: number;
    publicRepos: number;
    
    

}





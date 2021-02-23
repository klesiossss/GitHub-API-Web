import { SharedService } from './shared.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CadastroDePessoas';

  constructor(private sharedService:SharedService){
    this.sharedService.getPessoaList().subscribe(data=>{
      console.warn(data);
    })
  }
}

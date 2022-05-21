import { Component, OnInit } from '@angular/core';
import { DigimonesServices } from './digimones/digimones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apidigimon';
  digimones:any;

  constructor(public digimon:DigimonesServices){}
  ngOnInit()
  {
    this.digimon.getDigimones().subscribe
    (
      (res)=> {this.digimones= res; console.log(res) },
      (error)=>{console.error(error)} 
    )

  }

}

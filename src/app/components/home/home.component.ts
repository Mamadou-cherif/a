import { Component, OnInit } from '@angular/core';
//import { ConfigService } from 'src/app/config.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  //HomeTitle:String
  
  constructor() { }

  ngOnInit(): void {
   // this.HomeTitle= this.getAdmin();
   // console.log(this.HomeTitle)
    
  }
/*
getAdmin(){
  return this.conf.getConfiguration().HomeTitle
}
*/
}

import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { response } from 'express';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.css']
})
export class VerseComponent {
  constructor(private request:RequestService){}

  bibleData:any;
  today:number=Date.now();
  newVerse(){
    this.request.getRequest().subscribe(
      (response)=>{
        this.bibleData=response;
        console.log(response);
      }
    )
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mp3-clips',
  templateUrl: './mp3-clips.component.html',
  styleUrls: ['./mp3-clips.component.css']
})
export class Mp3ClipsComponent implements OnInit {

  ismp3 = true;
  @Output() thismp3 = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

 toggleclose(){
 
  //  this.ismp3 = !this.ismp3;
  //  this.thispdf.emit(false);
   this.thismp3.emit(false);
 }

}

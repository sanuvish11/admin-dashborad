import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mp3pdfetc',
  templateUrl: './mp3pdfetc.component.html',
  styleUrls: ['./mp3pdfetc.component.css']
})
export class Mp3pdfetcComponent implements OnInit {
  @Output() thismp3pdfetc = new EventEmitter();
  toggleclosebtn() {
    
    this.thismp3pdfetc.emit(false);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

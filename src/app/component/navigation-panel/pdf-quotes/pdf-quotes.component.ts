import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pdf-quotes',
  templateUrl: './pdf-quotes.component.html',
  styleUrls: ['./pdf-quotes.component.css']
})
export class PdfQuotesComponent implements OnInit {

  ispdf = true;
  @Output() thispdf = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

 toggleclose(){

   this.thispdf.emit(false);
 }

}

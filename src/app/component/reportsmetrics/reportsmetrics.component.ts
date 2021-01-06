import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reportsmetrics',
  templateUrl: './reportsmetrics.component.html',
  styleUrls: ['./reportsmetrics.component.css']
})
export class ReportsmetricsComponent implements OnInit {
  isreport = true;
  @Output() thisreport = new EventEmitter();
 
  toggleclosebtn(){
    // this.isreport = !this.isreport;
    this.thisreport.emit(false);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

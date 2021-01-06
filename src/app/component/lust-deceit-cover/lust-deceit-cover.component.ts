import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lust-deceit-cover',
  templateUrl: './lust-deceit-cover.component.html',
  styleUrls: ['./lust-deceit-cover.component.css']
})
export class LustDeceitCoverComponent implements OnInit {

  @Output() thislustdecit = new EventEmitter();
  toggleclosebtn(){
    this.thislustdecit.emit(false);
  }
  IsCollapse: boolean = false
  @Output() collapshaeder = new EventEmitter();

  somefunction() {
    this.IsCollapse = !this.IsCollapse;
    this.collapshaeder.emit(this.IsCollapse);
  }
  constructor() { }

  ngOnInit(): void {
  }
  // onSelect() {
  //   this.thislustdecit.emit({status:true,isclose:0});
  // }
}

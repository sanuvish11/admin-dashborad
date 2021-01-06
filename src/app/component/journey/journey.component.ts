import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GridsterItem, GridsterItemComponentInterface } from 'angular-gridster2';
import { PositionsService } from 'src/app/service/positions.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
isjourny=true
  @Output() thisjourney = new EventEmitter();
  toggleclosebtn(){
    this.isjourny = !this.isjourny;
    this.thisjourney.emit({status:false,isclose:1});
  }
 
  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  ngOnInit() {
    
    // hiding the gridster untill positions are loaded
    
  }

  onSelect(){
    this.thisjourney.emit({status:true,isclose:0});
  //  alert("hello")
  }

}

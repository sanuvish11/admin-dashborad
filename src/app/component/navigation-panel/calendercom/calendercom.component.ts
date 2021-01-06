import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-calendercom',
  templateUrl: './calendercom.component.html',
  styleUrls: ['./calendercom.component.css']
})
export class CalendercomComponent implements OnInit {
  public dateValue: Date = new Date('3/7/2017');  
  
  customDates(args:any): void {   let span: HTMLElement;

    span = document.createElement('span');
    span.setAttribute('class', 'e-icons highlight-day');
    
    if (+args.date.getDate() === 7) {
        //append the span element to day cell.
        args.element.appendChild(span);
        //set the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World health day!');
        //Use "special" class name to highlight the special dates, which you can refer in "styles.css".
        //args.element.className = 'special';
        args.element.className= 'single';
    }

    if (+args.date.getDate() === 5) {
      //append the span element to day cell.
      args.element.appendChild(span);
      //set the custom tooltip to the special dates.
      args.element.setAttribute('title', 'World health day!');
      //Use "special" class name to highlight the special dates, which you can refer in "styles.css".
      //args.element.className = 'special';
      args.element.className= 'double';
  }

    if (+args.date.getDate() === 21) {
        args.element.appendChild(span);
        args.element.className= 'multi';
        // args.element.className = 'special';
        //set the custom tooltip to the special dates.
        args.element.setAttribute('title', 'World forest day');
        
    }
}

  form: any = { 
    schedule_hour: "",
  schedule_minutes:"",
    ampm:"",
  comments:""};

  scheduledate: any;
  time: any
  father_id: any
  time1:any;
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private authService: AuthService, private http: HttpClient) {
  }
  timing = ['1',  '2','3','4','5','6', '7','8','9','10','11','12'];
  minutes = ['00','15', '30', '45'];
  ampm = ['AM','PM']

  iscalender = true;
  UserRoomList: any
  @Output() thiscalandercom = new EventEmitter();
  ngOnInit() {
    
  }
  public todayString = new Date();
  ScheduleDate(e: any) {
    //console.log(e);
    this.todayString = e.value;
    let date = (this.todayString.getDate() + "/" + this.todayString.getMonth() + "/" + this.todayString.getFullYear());
    this.scheduledate = date;
    this.form.schedule_date = this.scheduledate;
    this.authService.search(this.form).subscribe(
      data => {
        console.log(this.form);
        console.log(data)
        this.UserRoomList=data
        console.log(data.schedule_time)
      },
      err => {

      });

  }



  toggleclose() {
    this.thiscalandercom.emit(false);
  }

  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }


  onSelect() {
    this.thiscalandercom.emit(false);
  }

  am:any;
  schedule_time:any;
  
  schedule_minutes:any;
  registerForm: any;
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.form.schedule_date = this.scheduledate;
    // this.form.am = this.am;
    // this.form.schedule_time = this.schedule_time+this.am;
    this.father_id = localStorage.getItem("father_id");
    this.form.father_id = this.father_id
    this.authService.schedule(this.form).subscribe(
      data => {
       
      },
      err => {

      }
    );
  }





}

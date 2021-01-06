import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { ScheduleService } from './schedule.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  // form: any = {};
  // scheduledate: any;
  // time: any
  // father_id: any
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) {
  }
  timing = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'];
  ampm = ['AM','PM']

  iscalender = true;
  UserRoomList: any
  @Output() thiscalandercom = new EventEmitter();

  // onDateclick() {

  //   let singleChatData = this.UserRoomList.find((x: { scheduledate: any; }) => x.scheduledate)
  //   console.log(singleChatData)
  // }
  ngOnInit() {
  }
  // public todayString = new Date();
  // ScheduleDate(e: any) {

  //   this.todayString = e.value
  //   let date = (this.todayString.getDate() + "/" + this.todayString.getMonth() + "/" + this.todayString.getFullYear());
  //   this.scheduledate = date;
  //   this.form.schedule_date = this.scheduledate;
  //   this.scheduleService.search(this.form).subscribe(
  //     data => {
  //       console.log(this.form);
  //       console.log(data)
  //       this.UserRoomList=data
  //       console.log(data.schedule_time)
  //     },
  //     err => {

  //     });

  // }



  // toggleclose() {
  //   this.thiscalandercom.emit(false);
  // }

  // public show: boolean = false;
  // public buttonName: any = 'Show';
  // isShowDiv = true;
  // toggleDisplayDiv() {
  //   this.isShowDiv = !this.isShowDiv;
  // }


  // onSelect() {
  //   this.thiscalandercom.emit(false);
  // }

  // registerForm: any;
  // get f() { return this.registerForm.controls; }
  // onSubmit() {
  //   this.form.schedule_date = this.scheduledate;

  //   this.father_id = localStorage.getItem("name");
  //   this.form.father_id = this.father_id

  //   this.scheduleService.schedule(this.form).subscribe(
  //     data => {
  //       console.log(this.form);
  //       alert(this.form.schedule_time)

  //     },
  //     err => {

  //     }
  //   );
  // }




}




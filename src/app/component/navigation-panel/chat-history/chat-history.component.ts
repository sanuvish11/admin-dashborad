import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  room:any;
  ischathistory = true;
  @Output() chathis = new EventEmitter();
  constructor(private http: HttpClient) { 
    this.room = localStorage.getItem("roomId");
  }
  singleChatData: any;

  ngOnInit() {
    let body = {
      "ROOM_ID_FK": this.room
    };
    this.http.post("http://ec2-3-23-105-251.us-east-2.compute.amazonaws.com:8080/api/auth/chatdetail", body, this.httpOptions).subscribe(data => {
      this.singleChatData = data;
      console.log(data);
      console.log(this.singleChatData);
  })
}

 toggleclosebtn(){
  // this.ischathistory = !this.ischathistory;
  this.chathis.emit(false);
}
  

}

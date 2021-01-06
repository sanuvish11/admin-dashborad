import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PositionsService } from 'src/app/service/positions.service';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  ischatpanel = true;
  @Output() thischat = new EventEmitter();
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  toggleclosebtn() {
    // this.ischatpanel = !this.ischatpanel;
    this.thischat.emit(false);

  }
  onSelect() {
    this.thischat.emit({ status: true, isclose: 0 });
  }

  newMessage: string = '';
  messageList: string[] = [];
  load = true;
  name: string = "";
  typingUser: any;
  typing = false;
  sentTime: string = "";
  confessorName: any;
  room: any;
  status: any;
  constructor(private chatService: ChatService, private posServ: PositionsService, private http: HttpClient) {
    this.confessorName = localStorage.getItem("confessorName");

    this.room = localStorage.getItem("roomId");
  }

  loaded = true;
  singleChatData: any;
  ngOnInit() {

    let body = {
      "ROOM_ID_FK": this.room
    };
    this.http.post("http://ec2-3-23-105-251.us-east-2.compute.amazonaws.com:8080/api/auth/chatdetail", body, this.httpOptions).subscribe(data => {
      this.singleChatData = data;
      console.log(data);
      console.log(this.singleChatData);
    });


  }

  // hiding the gridster untill positions are loaded

  public show: boolean = false;
  public buttonName: any = 'Show';
  isShowDiv = true;
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  public todayString = new Date();
  ScheeduleDate(e: any) {
    console.log(e)
    this.todayString = e.value
  }

  initiate() {
    this.name = localStorage.getItem("adminname") || "father";
    this.chatService.initiateChat(this.name, this.room);
    this.load = false;
  }

  sendMessage() {
    let date: Date = new Date();
    this.chatService.sendMessage({ sender: this.name, msg: this.newMessage, time: date.toISOString(), sender_id: 1, room: this.room, status: 0 });
    this.newMessage = '';
    // this.messageList = [];    

  }

  update() {
    this.chatService.updateStatus(this.name);
  }

  getMessages() {

    this.chatService
      .getMessages()
      .subscribe((message: any) => {
        console.log(message);
        this.messageList.push(message);
      });

  }

  stopTyping() {
    this.chatService.stopTyping(this.name).subscribe((name: any) => {

      if (this.name !== name.username) {

        this.typingUser = name;
        this.typing = false;
      } else {
        this.typing = false;
      }
    });
  }

  getTyping() {
    this.chatService.getTypingStatus().subscribe((name: any) => {

      if (this.name !== name.username) {

        this.typingUser = name;
        this.typing = true;
      }
      setTimeout(() => {
        this.typing = false;
      }, 3000);

    });

  }




}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ɵConsole } from '@angular/core';
import { inputs } from '@syncfusion/ej2-angular-calendars/src/calendar/calendar.component';

@Component({
  selector: 'app-chat-queue',
  templateUrl: './chat-queue.component.html',
  styleUrls: ['./chat-queue.component.css']
})

export class ChatQueueComponent implements OnInit {
  chat = false;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ischatqueue = true;
  UserRoomList: any;
  @Output() chatcom = new EventEmitter();
  // @Output() openChatData = new EventEmitter();
  // @Output() thischat = new EventEmitter();


  constructor(private http: HttpClient) {
    this.GetAllActiveChats();
    this.GetAllChats();
    setInterval(() => {
      http.get("http://localhost:8080/api/auth/roomdetails", this.httpOptions).subscribe(data => {
        // console.log(data);
        this.UserRoomList = data
        // console.log(this.UserRoomList)
        // console.log(this.UserRoomList)
      })
    }, 1000);
  }

  ngOnInit() {
  }

  toggleclosebtn() {
    this.ischatqueue = !this.ischatqueue;
    this.chatcom.emit(false);
  }

  public show2: boolean = false;
  public buttonName2: any = 'Show';
  isShowDiv2 = true;
  toggleDisplayDiv2() {
    this.isShowDiv2 = !this.isShowDiv2;
  }


  onSelect(id: any) {  
    const CN = localStorage.getItem("confessorName"); 
    this.chatcom.emit(true);
    let singleChatData = this.UserRoomList.find((x: { id: any; }) => x.id === id);
    localStorage.setItem("roomId", singleChatData.ROOM_ID)
    localStorage.setItem("confessorName", singleChatData.USER_NAME)
    if(CN?.length != 0){
      this.updateChatStatus(singleChatData);
      
      //alert("kindly close the chat before opening new chat")
    }
    else{
      alert("cloase all chat first")  
    }   
  }

  // mycodestarts

  updateChatStatus(singleChatData: any){   
    this.http.post('http://ec2-3-139-227-180.us-east-2.compute.amazonaws.com:8080/api/auth/updateChatStatus/' + singleChatData.id,{})
    .subscribe(data => {
      console.log(data)
    })
  }

  InQueue = true
  AllActiveChats = false
  AllActiveChatsData : any; 

  AllOnlineUsersTab = false;
  AllOnlineUsersData :any;

  toggleChatTabs(chatArea:any){
  console.log(chatArea)
    if(chatArea =='IQ'){
      console.log("iq reached")
      this.InQueue = true;
      this.AllActiveChats = false
      this.AllOnlineUsersTab = false
    }
    if(chatArea =='AAC'){
      this.InQueue = false;
      this.AllActiveChats = true
      this.AllOnlineUsersTab = false
    }  
    if(chatArea =='ACL'){
      this.InQueue = false;
      this.AllActiveChats = false
      this.AllOnlineUsersTab = true
    }
  }

  GetAllActiveChats(){
    this.http.get('http://ec2-3-139-227-180.us-east-2.compute.amazonaws.com:8080/api/auth/GetAllActiveChats').subscribe(data=>{
      this.AllActiveChatsData = data
    })
  }

  GetAllChats(){
    this.http.get('http://ec2-3-139-227-180.us-east-2.compute.amazonaws.com:8080/api/auth/GetAllChats').subscribe(allsuers => {
        this.AllOnlineUsersData = allsuers
    })
  }

  
}




// mycodeends
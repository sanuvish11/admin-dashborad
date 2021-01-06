import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket, private http: HttpClient) { }

  public initiateChat(name:any, room:any) {
    this.socket.emit('join room', {username :  name, roomName : room});
    console.log("room join " + name + room);
    
}

  public sendMessage(message:any) {
    this.socket.emit('chat message', message);
    console.log("msg sending");

}
public updateStatus(username:any) {
  this.socket.emit('typing', username);
}

public stopTyping = (username:any) =>  {
  return Observable.create((observer:any) => {
    this.socket.emit('stoptyping', (username:any) => {
      console.log(username);
      observer.next(username);
    });
});}


public getTypingStatus = () => {
  return Observable.create((observer:any) => {
          this.socket.on('typing', (data:any) => {
            console.log(data);
            observer.next(data);
          });
  });
}


public getMessages = () => {
    return Observable.create((observer:any) => {
            this.socket.on('chat message', (message:any) => {
              console.log(message);
                observer.next(message);
            });
    });
}


getChatByRoom(room:any) {
  return new Promise((resolve, reject) => {
    this.http.get('/chat/' + room)    
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

showChat(id:any) {
  return new Promise((resolve, reject) => {
      this.http.get('/chat/' + id)
        .subscribe(res => {
          resolve(res)
      }, (err) => {
        reject(err);
      });
  });
}

saveChat(data:any) {
  return new Promise((resolve, reject) => {
      this.http.post('/chat', data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

updateChat(id:any, data:any) {
  return new Promise((resolve, reject) => {
      this.http.put('/chat/'+id, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

deleteChat(id:any) {
  return new Promise((resolve, reject) => {
      this.http.delete('/chat/'+id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}


}
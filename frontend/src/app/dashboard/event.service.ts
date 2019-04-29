import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private serverUrl = "";
  ws: any;
  constructor() { }

  connect(){
    let socket = new WebSocket(this.serverUrl);
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function (frame) {
      
    })
  }
}

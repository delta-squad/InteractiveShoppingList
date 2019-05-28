import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  serverUrl = "http://localhost:4200";
  wsEndpoint: string = this.serverUrl + "/dashboard";
  wsSubscribe: string = "/api/list/eventChange/";
  wsSend: string = "api/list/eventChange/topic/";
  ws: any;
  event: any;
  constructor() { }

  connect(){
    let socket = new WebSocket(this.wsEndpoint);
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function (frame) {
      that.ws.subscribe(that.wsSubscribe, function (message){
        console.log(message);
      });
    })
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    console.log("Disconnected");
  }

  sendEvent() {
    let data = JSON.stringify({
      'event' : this.event
    })
    this.ws.send(this.wsSend, {}, data);
  }
}

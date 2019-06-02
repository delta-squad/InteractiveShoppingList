import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJs from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  serverUrl = 'ws://localhost:8080';
  wsEndpoint: string = this.serverUrl + '/gs-guide-websocket';
  wsSubscribe: string = '/topic/eventChange/';
  wsSend: string = '/app/eventChange/';
  ws: any;
  name: string;
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
    console.log("Wysylanie");
    this.ws.send(this.wsSend, {}, "Wiadomosc");
  }
}

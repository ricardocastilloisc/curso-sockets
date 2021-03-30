import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  texto: string;
  constructor(public chatService:ChatService) { }

  ngOnInit(): void {
  }
  enviar= () =>
  {
    console.log(this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = '';


  }

}

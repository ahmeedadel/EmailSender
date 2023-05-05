import { Component } from '@angular/core';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent {
  Messages:any

  constructor(private messagesService:MessagesService){

  }

  ngOnInit(){
    this.messagesService.Messages$.subscribe({
      next: (messages:any) => {
        this.Messages = messages
      }
    })
    this.Messages = this.messagesService.allMessages;

  }

  DeleteMessage(message:any){
    this.messagesService.DeleteMessgaeFromDB(message);
  }

  }







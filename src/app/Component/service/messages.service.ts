import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Imessages } from '../interface/imessages';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  allMessages:any = []
  baseUrl ="https://localhost:7228/api/Messages";

  Messages$ = new Subject();

  constructor(private Messagesclient:HttpClient) {
  }
  ngOnInit(){
    this.GetAllMessagesFromDB()
  }
  GetAllMessagesFromDB() {
    this.Messagesclient.get(this.baseUrl).subscribe({
      next: (messages:any) => {
        this.allMessages = messages
        this.Messages$.next(messages)
      },
      error: (err:any) => {console.log(err)}
    })
  }

  AddNewMessageToDB(message:Imessages){
    this.Messagesclient.post(this.baseUrl, message).subscribe({
      next: (messages:any) => {
        this.allMessages = messages
        this.Messages$.next(messages)
      },
      error: (error:any) => console.log(error)
    })
  }

  DeleteMessgaeFromDB(message:Imessages){
    this.Messagesclient.delete(this.baseUrl + `?id=${message.id}`).subscribe({
      next: (messages:any) => {
        this.allMessages = messages
        this.Messages$.next(messages)
      },
      error: (error:any) => console.log(error)
    })
  }

  GetMessageById(id:number){
    let targetMessage = this.allMessages.find((message:any) => message.id == id)
    return targetMessage;
}


}

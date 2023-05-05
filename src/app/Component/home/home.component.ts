import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
    MessagesService: any;

    addMessage(newMessage:any){
      if(newMessage.subejct === "" || newMessage.messageContent === ""){
        return;
      }
      else{
        this.MessagesService.AddNewMessageToDB(newMessage);

      }
  }

  }



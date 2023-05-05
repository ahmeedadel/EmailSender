import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  baseUrl = "";
  constructor(private EmialClient:HttpClient) {}


  sendEmail(data:any)
  {
      return this.EmialClient.post(`${this.baseUrl}/data`,data)
  }

}

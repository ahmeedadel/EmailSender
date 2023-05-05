import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { EmailSenderComponent } from './Component/email-sender/email-sender.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:":id", component:EmailSenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

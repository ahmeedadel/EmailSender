import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageCardComponent } from './Component/message-card/message-card.component';
import { EmailService } from './Component/service/email.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagesService } from './Component/service/messages.service';
import { EmailSenderComponent } from './Component/email-sender/email-sender.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MessageCardComponent,
    EmailSenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,

  ],
  providers: [EmailService,
    MessagesService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ds: MessagesService) => () => {return ds.GetAllMessagesFromDB()},
      deps: [MessagesService],
      multi: true
    }],

  bootstrap: [AppComponent]
})


export class AppModule {

}

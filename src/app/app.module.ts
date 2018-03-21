import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ViewChild} from '@angular/core';
import {RoutingModule} from './routing.module'
import { AppComponent } from './app.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { FormsModule,  FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './Components/users/users.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { MatDialogModule,MatCardModule,MatInputModule,MatButtonModule,MatTableModule,MatIconModule,
  MatMenuModule,} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationDeleteDialog} from './Components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UsersComponent,
    EditUserComponent,
    ConfirmationDeleteDialog,
 
    
  ],
  entryComponents: [ConfirmationDeleteDialog],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

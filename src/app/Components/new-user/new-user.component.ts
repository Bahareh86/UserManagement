import {NgModule,Component,OnInit,ViewChild} from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Data } from '@angular/router/src/config';
import { NgModel, NgForm,FormControl, Validators,FormsModule,FormGroup} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers:[UserService]
})
export class NewUserComponent implements OnInit {
  
  firstName: string;
  lastName:string;
  password: string;
  email: string;
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  passwordFormControl=new FormControl('',[Validators.required, Validators.minLength(6)])
  constructor(private userService:UserService) {    
    
   }
   ngOnInit() {
  }
  onSubmit() {
    this.userService.createNewUser(
      {id:Math.floor(Math.random() *10) + 1,
        firstName:this.firstName,
        lastName:this.lastName,
        password:this.password,
        email:this.email});
    window.location.href = 'http://localhost:4200';
  }

  
}


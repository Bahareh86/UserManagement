import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service'
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {
  dataSource = new MatTableDataSource(this.getUsers());
  constructor( private userService: UserService ) { }
  
  ngOnInit() {
    
  }
   
  getUsers(){
   return  this.userService.getUsers();
         
    }

  
}



  
import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import { FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute } from '@angular/router'
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers:[UserService]
})

export class EditUserComponent implements OnInit {

  id:number;
  firstName: string;
  lastName:string;
  password: string;
  email: string;
  resetPassword :string

  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  passwordFormControl=new FormControl('',[Validators.minLength(6)])

   constructor(private userService:UserService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var user=this.userService.getUserById(params['id']);
     
      if(user!=null ||user!=undefined){
        this.id=user.id;
        this.firstName=user.firstName;
        this.lastName=user.lastName;
        this.email=user.email;
        this.resetPassword=user.password;
      }
     
      
    });
  }
  onSubmit() {
      let user={
        id:this.id,
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email
      }
      if(this.password!=null||this.password!=undefined){
        user["password"]=this.password;
        
      } 
      else{
        user["password"]=this.resetPassword;
        
      }
      console.log(user);
      this.userService.editUser(user);
      window.location.href = 'http://localhost:4200';
        
    
  }

  openDialog(){
    const dialogRef = this.dialog.open(ConfirmationDeleteDialog, {
      width: '250px',
      data: {
        id: this.id
      }
    });
    
    
    
  }
}


//Modal for delete
@Component({
  selector: 'confirmation-delete-dialog',
  template: `
  <style>
  button {
    border: 1px solid #777;
  }
  h2 {
    background-color: #eef;
    font-weight: normal;
  }
</style>
  <h2 mat-dialog-title>Delete User</h2>
  <mat-dialog-content>Are you sure?</mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button mat-dialog-close color="primary">No</button>
    <!-- Can optionally provide a result for the closing dialog. -->
    <button mat-button color="warn"(click)="delete()"  >Yes</button>
  </mat-dialog-actions>
 `,
  providers:[UserService]
})
export class ConfirmationDeleteDialog {
  private id:number
  constructor(private dialogRef: MatDialogRef<ConfirmationDeleteDialog>,
              private userService:UserService,
              @Inject(MAT_DIALOG_DATA) public data: any
            ){
                
              }
  public ngOnInit() {
    
    this.id = this.data.id;
    console.log(this.id);
  }
  delete(){
     this.dialogRef.close();
     this.userService.deleteUser(this.id);
     window.location.href = 'http://localhost:4200';
  }
}





import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users:any[]=[];
  constructor() { }

   public getUsers()
   {
    //localStorage.clear();
    if(this.users.length<1 && localStorage.getItem("users")==null ){
      return null;
    }
    return JSON.parse(localStorage.getItem("users"));
    
   }

   public getUserById(id){
    let index=this.search(id,JSON.parse(localStorage.getItem("users")));
    if(index>-1){
    return JSON.parse(localStorage.getItem("users"))[index];
    }
   }

   public createNewUser(user)
   {
    if(JSON.parse(localStorage.getItem("users"))!=null){
      this.users= JSON.parse(localStorage.getItem("users")); 
    }
    this.users.unshift(user);
    localStorage.setItem("users", JSON.stringify(this.users)); 
    
   }

   public editUser(user)
   {
    var index=this.search(user.id, JSON.parse(localStorage.getItem("users")));
    if(index>-1){
    this.users= JSON.parse(localStorage.getItem("users"));
    this.users[index]=user;
    localStorage.setItem("users", JSON.stringify(this.users));
    
    }
   }

   public deleteUser(id){
   var index=this.search(id,JSON.parse(localStorage.getItem("users")));
    if(index>-1){
      this.users= JSON.parse(localStorage.getItem("users"));
      this.users.splice(index,1);
      localStorage.setItem("users", JSON.stringify(this.users));
    }
    
   }


   private search(id, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id == id) {
            return i;
        }
    }
  }


}

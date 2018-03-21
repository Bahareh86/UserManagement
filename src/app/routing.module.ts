import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NewUserComponent } from './Components/new-user/new-user.component';
import {UsersComponent} from './Components/users/users.component'
import {EditUserComponent} from './Components/edit-user/edit-user.component'

const routes: Route[] = [
    {
      path: 'NewUser',
      component: NewUserComponent
    }, 
    {
        path:'',
        component:UsersComponent
    },
    {
      path:'EditUser/:id',
      component:EditUserComponent
    }
  ];
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes),
     
    ],
    exports: [
      RouterModule,
    ],
     declarations: []
  })

export class RoutingModule {
}

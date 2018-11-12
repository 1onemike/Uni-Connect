import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SchoolsComponent} from './schools/schools.component';
import{DashboardComponent}from './dashboard/dashboard.component';
import{ProfileComponent}from './profile/profile.component';
import { ApplicationsComponent } from './applications/applications.component';
import { DetailsComponent } from './details/details.component';
import { ApplyComponent } from './apply/apply.component';
import { EditprofileComponent } from './editprofile/editprofile.component';




const routes: Routes = [
{
   path:'',
   component:HomeComponent,
   pathMatch : 'full'

},

{
  path:'home',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'schools',
  component:SchoolsComponent
},
// {
//   path:'admin',
//   component:DashboardComponent
// }
// ,
//  {
//  path : '**',
//  component:HomeComponent
//  },
{
   path:'profile',
   component:ProfileComponent
 },
 {
  path:'applications',
  component:ApplicationsComponent
},
{
  path:'details',
  component:DetailsComponent
},
{
  path:'editprofile',
  component:EditprofileComponent

},
{
  path:'apply',
  component:ApplyComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

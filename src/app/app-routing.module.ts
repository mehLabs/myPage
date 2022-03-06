import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

const routes: Routes = [
  {path:'navbar',component:NavBarComponent},
  {path:'aptitudes',component:AptitudesComponent},
  {path:'employment-history',component:EmploymentHistoryComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'social-media',component:SocialMediaComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

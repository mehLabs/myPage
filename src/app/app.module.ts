import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodingComponent } from './components/aptitudes/coding/coding.component';
import { SocialComponent } from './components/aptitudes/social/social.component';
import { OtherSkillsComponent } from './components/aptitudes/other-skills/other-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    AptitudesComponent,
    EmploymentHistoryComponent,
    SocialMediaComponent,
    HomeComponent,
    CodingComponent,
    SocialComponent,
    OtherSkillsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

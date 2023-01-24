import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoute:Routes = [
  {path:'', component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Courses',component:CoursesComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

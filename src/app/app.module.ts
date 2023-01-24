import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';

const appRoute:Routes = [
  {path:'', component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Courses',component:CoursesComponent},
  // {path:'Courses/Course/:id',component:CourseComponent},
  {
    path:'Courses',children:[
      {path:'Course/:id',component:CourseComponent}
    ]
  }

]
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

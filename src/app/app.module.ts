import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './Services/movies.service';
import { MovieComponent } from './movies/movie/movie.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Movies', component: MoviesComponent },
  {
    path:'Courses',children:[
      {path:'Course/:id',component:CourseComponent}
    ]
  },
  {
    path:'Movies',children:[
      {path:'Movie/:id',component:MovieComponent}
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    CourseComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [CoursesService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component,OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  constructor(private service: CoursesService, private activatedRoute: ActivatedRoute,private router:Router) { }

  
  course:any;
  courseId: any;


  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

    this.course = this.service.courses.find(x => x.id == this.courseId);
  
  }
}

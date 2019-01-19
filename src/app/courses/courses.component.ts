import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  title = "List of Courses";
  courses;
  // isActive = false;
  // email = "test@test.com";

  getTitle() {
    return this.title;
  }

  // onKeyUp() {
  //   console.log(`Email : ${this.email}`);
  // }

  text = 'I tried so hard and got so far, but in the end it doesn\'t even matter, I had to fall to lose it all, but in the end, it doesn\'t even matter.' ;

  course = {
    title: "The Complete Angular Guide",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
}

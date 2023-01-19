import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  submitted = false;
  student : Student = new Student();

  constructor(private studentService: StudentService, private router: Router){}
  
  ngOnInit(): void {}

  saveStudent(){
    console.log(this.student);
    this.studentService.create(this.student).subscribe( data =>{
      console.log(this.student);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }
  
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }
  
  hide = true;
}

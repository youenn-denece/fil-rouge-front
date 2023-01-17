import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  student = {
    firstname: 'endur',
    lastname: 'en dur',
    email: 'endur@gmail.com',
    password: 'endur',
    company: ''
   };
  submitted = false;
  //student : Student = new Student();

  constructor(private studentService: StudentService, private router: Router){}
  
  ngOnInit(): void {}

  saveStudent(){
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


  // saveStudent(): void {
  //   const student = {
  //     firstName: this.student.firstname,
  //     lastName: this.student.lastname,
  //     email: this.student.email,
  //     password: this.student.password,
  //     entrepriseName: this.student.company
  //   }; 
  //   this.studentService.create(student)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error)
  //       });
  // }

  // newStudent(): void {
  //   this.submitted = false;
  //   this.student = {
  //     firstname: '',
  //     lastname: '',
  //     email:'',
  //     password:'',
  //     company: ''
  //   }
  // }
  
  hide = true;
}

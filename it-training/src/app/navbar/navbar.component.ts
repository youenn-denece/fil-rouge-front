import { Component } from '@angular/core';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  student = new Student();

  constructor() {
    
  }

  ngOnInit() {
    if(sessionStorage.getItem('studentdetails')){
      this.student = JSON.parse(sessionStorage.getItem('studentdetails')!);
    }
  }

}

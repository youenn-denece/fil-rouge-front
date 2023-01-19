import { Component, OnInit } from '@angular/core';

import { ConnexionService } from '../services/connexion.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Student } from '../model/student.model';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent implements OnInit {
  authority: string = "";
  student = new Student;
  
  constructor(private connexionService: ConnexionService, private router: Router) {}

  ngOnInit(): void {}

  validateStudent() {
    this.connexionService.validateConnexionDetails(this.student).subscribe(
      responseData => {
        console.log(this.student);
        this.student= <any> responseData.body;
        this.student.authorities = ['AUTH'];
        window.sessionStorage.setItem("userdetails", JSON.stringify(this.student));
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
        this.router.navigate(['home'])
      }
    )
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;
}

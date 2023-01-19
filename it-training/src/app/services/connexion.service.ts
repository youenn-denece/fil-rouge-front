import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { AppConstants } from '../constants/app.constants';
import { Student } from '../model/student.model';


@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) {}

  validateConnexionDetails(student: Student) {
    console.log(student);
    window.sessionStorage.setItem("userdetails",JSON.stringify(student));
    console.log(JSON.parse(sessionStorage.getItem('userdetails')!));
    return this.http.get(environment.rooturl + AppConstants.CONNEXION_API_URL, { observe: 'response',withCredentials: true });
  }

}

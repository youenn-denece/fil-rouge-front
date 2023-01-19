import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../model/student.model";

const baseUrl= "http://localhost:8081/api/it-training";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    isCreatingStudent: boolean = false;

    constructor(private httpClient: HttpClient){}

    toggleUserCreation(): void {
        this.isCreatingStudent = !this.isCreatingStudent;
    }

    ngOnInit(): void {}

    create(student: Student): Observable<Object>{
        return this.httpClient.post(baseUrl + '/createStudent', student);
    }
}
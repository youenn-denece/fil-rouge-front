import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from './formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private baseURL = 'http://localhost:8081/api/it-training/course/';

  constructor(private httpClient: HttpClient) {}

  getFormationsList(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.baseURL}`);
  }
}

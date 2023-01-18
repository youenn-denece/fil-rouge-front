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

  createFormation(formation: Formation): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, formation);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`${this.baseURL}/${id}`);
  }

  updateFormation(id: number, formation: Formation): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, formation);
  }

  deleteFormation(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormationCat } from './formation-cat';

@Injectable({
  providedIn: 'root',
})
export class FormationCatService {
  constructor(private httpClient: HttpClient) {}

  private baseURL = 'http://localhost:8081/api/it-training/category/';

  getFormationsCatList(): Observable<FormationCat[]> {
    return this.httpClient.get<FormationCat[]>(`${this.baseURL}`);
  }

  getFormationCatById(id: number): Observable<FormationCat> {
    return this.httpClient.get<FormationCat>(`${this.baseURL}${id}`);
  }
}

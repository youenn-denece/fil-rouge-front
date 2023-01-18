import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from "rxjs";
import { ISession, sessions, sess } from './dashboard-index/model/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions$ = new BehaviorSubject<ISession[]>([]);

  private sessionC = new Subject<ISession | undefined>() ;
  sessionC$ = this.sessionC.asObservable();


  constructor(private http: HttpClient, private router: Router) {
      this.sessions$.next(sessions);
  }

  updateSelectedSession(selectedSess: ISession | undefined) {
    this.sessionC.next(selectedSess);
  }

}

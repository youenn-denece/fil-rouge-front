import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISession, sessions, sess } from '../model/session';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/session.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent {
  sessionList: Observable<ISession[]> = this.sessionService.sessions$.asObservable();

  sessions$ = new BehaviorSubject<ISession[]>([]);
  session: ISession | undefined = sess;
  @Output() changeSelectedSession = new EventEmitter<string>();

  constructor(private sessionService: SessionService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.sessionService.currentSelectedSession.subscribe(s => this.selectedSession = s[0]);
    }


  selectSession(sessionId: string): void {

      // this.selectedSession = sessions.find(element => element.id === sessionId);
    this.changeSelectedSession.emit(sessionId);


    // this.router.navigate([sessionId]);

    // this.sessionService.updateSelectedSession(this.selectedSession);
    console.log("plop2 " + sessionId);
};

}

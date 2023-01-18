import { Component, EventEmitter, Output } from '@angular/core';
import { ISession} from '../model/session';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from "rxjs";
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent {

  sessionList: Observable<ISession[]> = this.sessionService.sessions$.asObservable();
  sessions$ = new BehaviorSubject<ISession[]>([]);
  @Output() changeSelectedSession = new EventEmitter<string>();

  constructor(private sessionService: SessionService) {}

  selectSession(sessionId: string): void {
    this.changeSelectedSession.emit(sessionId);
    // console.log("dans search.selectSession " + sessionId);
  };

}

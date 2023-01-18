import { Component } from '@angular/core';
import { SessionService } from '../session.service';
import { ISession, sessions } from './model/session';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss'],
  providers: [SessionService]
})
export class DashboardIndexComponent{

  session2: ISession | undefined;

  constructor(private sessionService: SessionService) {}


  onChangeSelectedSession(sessionId: string) {
    this.session2 = sessions.find(element => element.id === sessionId);
    // console.log(this.session2);
    // console.log("dans index/onChangeSelectedSession " + sessionId);
    this.sessionService.updateSelectedSession(this.session2);
  }

}

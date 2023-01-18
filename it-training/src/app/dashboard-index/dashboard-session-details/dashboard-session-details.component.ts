import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ISession } from '../model/session';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-dashboard-session-details',
  templateUrl: './dashboard-session-details.component.html',
  styleUrls: ['./dashboard-session-details.component.scss']
})
export class DashboardSessionDetailsComponent implements OnDestroy {
  sess : ISession | undefined;

  private subs: Subscription;

  constructor(private sessionService: SessionService) {
    this.subs = sessionService.sessionC$.subscribe( s => this.sess = s);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}

import { Component, Input } from '@angular/core';
import { Formation } from '../formation';
import { Session } from '../session';

@Component({
  selector: 'app-formation-session',
  templateUrl: './formation-session.component.html',
  styleUrls: ['./formation-session.component.scss'],
})
export class FormationSessionComponent {
  @Input() formation!: Formation;
  @Input() sessions!: Session[];

  ngOnInit(): void {
  }

  gotSessions() {
    if (this.sessions.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  refresh()
  {
    window.location.reload();
  }
}

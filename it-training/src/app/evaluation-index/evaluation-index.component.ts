import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-index',
  templateUrl: './evaluation-index.component.html',
  styleUrls: ['./evaluation-index.component.scss']
})
export class EvaluationIndexComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  nextPage() {
    this.router.navigate(['/evaluation-formation']);
  };

}

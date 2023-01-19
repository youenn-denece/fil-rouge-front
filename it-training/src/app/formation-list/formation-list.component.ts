import { Component, DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from './formation';
import { Session } from './session';
import { FormationCatService } from './formation-cat.service';
import { FormationService } from './formation.service';
import { FormationCat } from './formation-cat';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss'],
})
export class FormationListComponent {
  formations?: Formation[];
  formationCatId?: number;
  formationsCat?: FormationCat[];
  sessionOpened: boolean = false;
  selectedFormation: any = 'null';
  selectedCategory?: FormationCat;
  formationSelected: boolean = false;
  categorySelected: boolean = true;
  id: any;
  sessionList!: Session[];
  constructor(
    private formationService: FormationService,
    private formationCatService: FormationCatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFormationsCat();
    this.getFormationsCatById(1);
  }

  private getFormationsCat() {
    this.formationCatService.getFormationsCatList().subscribe((data) => {
      this.formationsCat = data;
    });
  }

  public getFormationsCatById(id: number) {
    this.formationCatService.getFormationCatById(id).subscribe((data) => {
      this.id = data.id;
      this.formations = data.courseList;
    });
  }

  public changeSelectedFormation(f: Formation) {
    this.formationSelected = true;
    this.selectedFormation = f;
    this.sessionList = this.selectedFormation.sessionList;
  }

  public getSessionList() {
    return this.sessionList;
  }

  public changeSelectedCategroy(fcat: FormationCat) {
    this.selectedCategory = fcat;
    this.categorySelected = true;
    this.id = fcat.id;
    this.getFormationsCatById(this.id);
  }

  public isFormationSelected() {
    return this.formationSelected;
  }
  public isCategorySelected() {
    return this.categorySelected;
  }
  public getSelectedFormation() {
    return this.selectedFormation;
  }
  public getSessions() {
    return this.sessionList;
  }
}

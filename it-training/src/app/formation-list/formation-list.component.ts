import { Component, DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationCatService } from '../formation-cat.service';
import { FormationService } from '../formation.service';
import { FormationCat } from '../formation-cat';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss'],
})
export class FormationListComponent {
  formations?: Formation[];
  formationsCat?: FormationCat[];

  selectedFormation: any = 'null';
  selectedCategory: any = 'Langages';
  formationSelected: boolean = false;
  categorySelected: boolean = true;

  constructor(
    private formationService: FormationService,
    private formationCatService: FormationCatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFormations();
    this.getFormationsCat();
  }

  private getFormations() {
    this.formationService.getFormationsList().subscribe((data) => {
      this.formations = data;
    });
  }

  private getFormationsCat() {
    this.formationCatService.getFormationsCatList().subscribe((data) => {
      this.formationsCat = data;
    });
  }

  public changeSelectedFormation(f: Formation) {
    this.formationSelected = true;
    this.selectedFormation = f;
  }

  public changeSelectedCategroy(fcat: FormationCat) {
    this.selectedCategory = fcat;
    this.categorySelected = true;
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

}

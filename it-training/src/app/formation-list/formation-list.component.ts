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
  formationCatId?: number;
  formationsCat?: FormationCat[];

  selectedFormation: any = 'null';
  selectedCategory?: FormationCat;
  formationSelected: boolean = false;
  categorySelected: boolean = true;
  id: any;
  constructor(
    private formationService: FormationService,
    private formationCatService: FormationCatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFormations();
    this.getFormationsCat();
    this.getFormationsCatById(1);
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

  public getFormationsCatById(id: number) {
    this.formationCatService.getFormationCatById(id).subscribe((data) => {
      this.id = data.id;
      this.formations = data.courseList;
    });
  }

  public changeSelectedFormation(f: Formation) {
    this.formationSelected = true;
    this.selectedFormation = f;
  }


  public changeSelectedCategroy(fcat: FormationCat) {
    console.log("enter change selected cat");
    this.selectedCategory = fcat;
    this.categorySelected = true;
    this.id = fcat.id;
    this.getFormationsCatById(this.id);
    console.log("id = " + this.id);
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

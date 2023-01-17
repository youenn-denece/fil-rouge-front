import { Component, DebugElement } from '@angular/core';
import { Formation, formations } from 'src/app/formation';
import { FormationCatService } from '../formation-cat.service';
import { FormationService } from '../formation.service';
import { FormationCat, formationCat } from '../formationsCat';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss'],
})
export class FormationListComponent {
  formations = formations;
  formationCat = formationCat;
  selectedFormation: any;
  selectedCategory: any;
  nextSession: any;
  formationSelected: boolean;
  categorySelected: boolean;

  constructor() {
    this.formationSelected = false;
    this.categorySelected = false;
    this.selectedCategory = 'Langages';
  }
  isFormationSelected() {
    return this.formationSelected;
  }
  isCategorySelected() {
    return this.categorySelected;
  }
  changeSelectedFormation(f: Formation) {
    this.formationSelected = true;
    this.selectedFormation = f;
  }
  getFormationList() {
    const myForm: Formation[] = [];
    for (let index = 0; index < formations.length; index++) {
      const element = formations[index];
      let i = 0;
      if (element.categoryID == this.selectedCategory.id) {
        myForm.push(element);
        i++;
      }
    }
    console.log(myForm.length);
    return myForm;
  }
  getSelectedFormation() {
    return this.selectedFormation;
  }
  changeSelectedCategroy(fcat: FormationCat) {
    this.selectedCategory = fcat;
    this.categorySelected = true;
  }
  getSelectedCat() {
    return this.selectedCategory;
  }
  getNextSessions() {
    return this.nextSession;
  }
}

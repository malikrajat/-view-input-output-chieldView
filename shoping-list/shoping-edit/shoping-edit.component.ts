import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../recipes/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('controlNameInput') controlName: ElementRef;
  @ViewChild('controlAmountInput') controlAmount: ElementRef;
  @Output() addNewIngredent = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  addRecipe() {
    const name = this.controlName.nativeElement.value;
    const amount = this.controlAmount.nativeElement.value;
    const newIngedent = new Ingredient(name, amount)
    this.addNewIngredent.emit(newIngedent);
  }

}

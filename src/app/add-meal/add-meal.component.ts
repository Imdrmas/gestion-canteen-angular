import { MealService } from './../service/meal.service';
import { RecipeMealService } from './../service/recipe-meal.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meal, RecipeMeal } from '../modal/Modal';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  recipes: RecipeMeal[] = [];
  meal: Meal = {} as Meal;
  disabledBtn = true;
  progressBar = false;
  selected: number = 1;

  constructor(private recipeMealService: RecipeMealService, private mealService: MealService, @Inject(MAT_DIALOG_DATA) private data: any,) { }

  ngOnInit(): void {
    this.recipeMealService.findRecipeMeals().subscribe((recipes) => {
      this.recipes = recipes;
    })
  }
  addRecipe() {
   this.progressBar = true;
   this.mealService.addMeal(this.meal, this.data.id, this.selected).subscribe(() => {
     window.location.reload();
   })
  }
  getRecipeId(e: any) {
    this.selected = e.target.value;  
    this.disabledBtn = false;    
  }

  
}

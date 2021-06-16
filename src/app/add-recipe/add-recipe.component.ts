import { RecipeMealService } from './../service/recipe-meal.service';
import { RecipeMeal } from './../modal/Modal';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  progressBar = false;
  recipeMeal: RecipeMeal = {} as RecipeMeal;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private recipeMealService: RecipeMealService) { }

  ngOnInit(): void {
    if(this.data.idRecipe != null) {
      this.recipeMealService.findRecipeMeal(this.data.idRecipe).subscribe((recipeMeal) => {
          this.recipeMeal = recipeMeal;
      })
    }
  }
  addRecipe() {
    this.progressBar = true;
    if(this.data.idRecipe == null) {
      this.recipeMealService.addRecipeMealToCook(this.recipeMeal, this.data.id).subscribe((recipeMeal) => {
       this.recipeMeal = recipeMeal;
       window.location.reload();
      })
    } else {
      this.recipeMealService.updateRecipeMeal(this.recipeMeal, this.data.idRecipe).subscribe((recipeMeal) => {
        this.recipeMeal = recipeMeal;
        window.location.reload();
       })
    }
  }
}

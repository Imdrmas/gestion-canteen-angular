import { CanteenService } from './../service/canteen.service';

import { MealService } from './../service/meal.service';
import { Meal, RecipeMeal, Canteen } from './../modal/Modal';
import { AddMealComponent } from './../add-meal/add-meal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-meals',
  templateUrl: './find-meals.component.html',
  styleUrls: ['./find-meals.component.css']
})
export class FindMealsComponent implements OnInit {
  meals: Meal[] = [];
  recipes: RecipeMeal[] = [];
  canteen: Canteen = {} as Canteen;

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private mealService: MealService, 
    private canteenService: CanteenService) { 
    this.route.params.subscribe(
      params => {         
        this.mealService.findMeals(this.route.snapshot.params.id).subscribe((meals) => {
          this.meals = meals;          
         });
         this.canteenService.findCanteen(this.route.snapshot.params.id).subscribe((canteen) => {
           this.canteen = canteen;
         })
      }
    )
  }

  ngOnInit(): void {
  }
  addRecipe() {
    const id = this.route.snapshot.params.id;
    this.dialog.open(AddMealComponent, {
      height: '240px',
      width: '400px',
      data: { id },
    });
  }
  deleteMeal(id: number) {
    if(confirm('Are you sure')) {
      this.mealService.deleteMeal(id).subscribe(() => {
        window.location.reload();
      })
    }
  }
}

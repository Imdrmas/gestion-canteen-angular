import { Student } from './../modal/Modal';
import { StudentService } from './../service/student.service';
import { AddStudentComponent } from './../add-student/add-student.component';
import { MealService } from './../service/meal.service';
import { RecipeMealService } from './../service/recipe-meal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeMeal } from '../modal/Modal';
import { MatDialog } from '@angular/material/dialog';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';

@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.component.html',
  styleUrls: ['./find-recipe.component.css']
})
export class FindRecipeComponent implements OnInit {
  recipes: RecipeMeal[] = [];
  students: Student[] = [];

  constructor(private route: ActivatedRoute, private mealService: MealService, private dialog: MatDialog,
    private studentService: StudentService, private recipeMealService: RecipeMealService) {
    this.route.params.subscribe(
      params => {
        this.mealService.findRecipesForMeal(this.route.snapshot.params.id).subscribe((recipes) => {
          this.recipes = recipes;
        });
        this.studentService.findStudents(this.route.snapshot.params.id).subscribe((students) => {
          this.students = students;
        })
      }
    )
   }

  ngOnInit(): void {
  }
  addStudent() {
    let id = this.route.snapshot.params.id;
    this.dialog.open(AddStudentComponent, {
      height: '320px',
      width: '400px',
      data: { id },
    });
  }
  updateStudent(idStudent: number) {
    this.dialog.open(AddStudentComponent, {
      height: '320px',
      width: '400px',
      data: { idStudent },
    });
  }
  updateRecipe(idRecipe: number) {
    this.dialog.open(AddRecipeComponent, {
      height: '390px',
      width: '400px',
      data: { idRecipe },
    });
  }
  deleteStudent(id: number) {
    if(confirm('Are you sure')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        window.location.reload();
      })
    }
  }
  deleteRecipe(id: number) {
    if(confirm('Are you sure')) {
      this.recipeMealService.deleteRecipeMeal(id).subscribe(() => {
        this.mealService.deleteMeal(this.route.snapshot.params.id).subscribe(() => {
          window.location.replace('/home');
        })
      })
    }
  }
}

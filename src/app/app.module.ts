import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AddCanteenComponent } from './add-canteen/add-canteen.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { FindCooksComponent } from './find-cooks/find-cooks.component';
import { AddCookComponent } from './add-cook/add-cook.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FindMealsComponent } from './find-meals/find-meals.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCanteenComponent,
    FindCooksComponent,
    AddCookComponent,
    AddRecipeComponent,
    FindMealsComponent,
    AddMealComponent,
    FindRecipeComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }

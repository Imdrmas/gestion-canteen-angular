import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { FindMealsComponent } from './find-meals/find-meals.component';
import { FindCooksComponent } from './find-cooks/find-cooks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo:  '/home', pathMatch:  'full' },
  {
    path:  'home',
    component: HomeComponent,
    children: [
      {
        path: 'find-cooks/:id',
        component: FindCooksComponent
      },
      {
        path: 'find-meals/:id',
        component: FindMealsComponent,
      },
      {
        path: 'find-recipe/:id',
        component: FindRecipeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

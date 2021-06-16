import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }

  addMeal(data: any, id: number, idRecipe: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addMeal/${id}/${idRecipe}`, data);
  }
  updateMeal(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateMeal/${id}`, data);
  }
  findMeal(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findMeal/${id}`);
  }
  deleteMeal(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteMeal/${id}`);
  }
  findMeals(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findMeals/${id}`);
  }
  findRecipesForMeal(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findRecipesForMeal/${id}`);
  }
}

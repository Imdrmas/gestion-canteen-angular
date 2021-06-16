import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeMealService {

  constructor(private http: HttpClient) { }

  addRecipeMeal(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addRecipeMeal/${id}`, data);
  }
  addRecipeMealToCook(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addRecipeMealToCook/${id}`, data);
  }
  updateRecipeMeal(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateRecipeMeal/${id}`, data);
  }
  findRecipeMeal(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findRecipeMeal/${id}`);
  }
  deleteRecipeMeal(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteRecipeMeal/${id}`);
  }
  findRecipeMeals(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findRecipeMeals`);
  }
  findRecipeMealsForMeal(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findRecipeMealsForMeal/${id}`);
  }
}

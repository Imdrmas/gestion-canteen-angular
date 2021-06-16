import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookService {

  constructor(private http: HttpClient) { }

  addCook(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addCook/${id}`, data);
  }
  updateCook(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateCook/${id}`, data);
  }
  findCook(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCook/${id}`);
  }
  deleteCook(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteCook/${id}`);
  }
  findCooks(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCooks/${id}`);
  }
}

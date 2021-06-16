import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanteenService {

  constructor(private http: HttpClient) { }

  addCanteen(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addCanteen`, data);
  }
  updateCanteen(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateCanteen/${id}`, data);
  }
  findCanteen(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCanteen/${id}`);
  }
  deleteCanteen(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteCanteen/${id}`);
  }
  findCanteens(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findCanteens`);
  }
}

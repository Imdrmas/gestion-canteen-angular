import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanteenGroupService {

  constructor(private http: HttpClient) { }

  addCanteenGroup(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addCanteenGroup/${id}`, data);
  }
  updateCanteenGroup(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateCanteenGroup/${id}`, data);
  }
  findCanteenGroup(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findCanteenGroup/${id}`);
  }
  deleteCanteenGroup(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteCanteenGroup/${id}`);
  }

}

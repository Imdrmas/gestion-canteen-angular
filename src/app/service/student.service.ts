import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  addStudent(data: any, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addStudent/${id}`, data);
  }
  updateStudent(data: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateStudent/${id}`, data);
  }
  findStudent(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findStudent/${id}`);
  }
  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/deleteStudent/${id}`);
  }
  findStudents(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findStudents/${id}`);
  }
}

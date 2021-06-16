import { StudentService } from './../service/student.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../modal/Modal';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  progressBar = false;
  student: Student = {} as Student;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private studentService: StudentService) { }

  ngOnInit(): void {
    if(this.data.idStudent!=null) {
      this.studentService.findStudent(this.data.idStudent).subscribe((student) => {
        this.student = student;
      })
    }
  }

  addStudent() {
   this.progressBar = true;
   if(this.data.idStudent==null) {
    this.studentService.addStudent(this.student, this.data.id).subscribe((student) => {
      this.student = student;
      window.location.reload();
    })
   } else {
    this.studentService.updateStudent(this.student, this.data.idStudent).subscribe((student) => {
      this.student = student;
      window.location.reload();
    })
   }

 }
}

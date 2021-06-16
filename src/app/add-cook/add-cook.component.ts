import { CookService } from './../service/cook.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cook } from '../modal/Modal';

@Component({
  selector: 'app-add-cook',
  templateUrl: './add-cook.component.html',
  styleUrls: ['./add-cook.component.css']
})
export class AddCookComponent implements OnInit {
  progressBar = false;
  cook: Cook = {} as Cook;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private cookService: CookService) { }

  ngOnInit(): void {
    if(this.data.idCook != null) {
      this.cookService.findCook(this.data.idCook).subscribe((cook) => {
         this.cook = cook;
      })
    }
  }
addCook() { 
  this.progressBar = true;
  if(this.data.idCook == null) { 
    this.cookService.addCook(this.cook, this.data.id).subscribe((cook) => {
      this.cook = cook;
      window.location.reload();
    })
  } else {
    this.cookService.updateCook(this.cook, this.data.idCook).subscribe((cook) => {
      this.cook = cook;
      window.location.reload();
    })
  }
 }
}

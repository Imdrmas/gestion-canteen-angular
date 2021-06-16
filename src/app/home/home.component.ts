import { CanteenService } from './../service/canteen.service';
import { AddCanteenComponent } from './../add-canteen/add-canteen.component';
import { Component, OnInit } from '@angular/core';
import  { MatDialog }  from  '@angular/material/dialog';
import { Canteen } from '../modal/Modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  canteens: Canteen[] = [];

  constructor(private dialog: MatDialog, private canteenService: CanteenService) { }

  ngOnInit(): void {
    this.canteenService.findCanteens().subscribe((canteens) => {
       this.canteens = canteens;
    })
  }
  addCanteen() {
    const id = null;
    this.dialog.open(AddCanteenComponent, {
      height: '380px',
      width: '400px',
      data: {id}
    });
  }
  deleteCanten(id: number) {
   if(confirm('Are you sure')) {
     this.canteenService.deleteCanteen(id).subscribe(() => {
       window.location.reload();
     })
   }
  }
  updateCanteen(idCanteen: number) {
    this.dialog.open(AddCanteenComponent, {
      height: '380px',
      width: '400px',
      data: {idCanteen}
    });
  }
}

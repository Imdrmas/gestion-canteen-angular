import { CanteenService } from './../service/canteen.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Canteen } from '../modal/Modal';

@Component({
  selector: 'app-add-canteen',
  templateUrl: './add-canteen.component.html',
  styleUrls: ['./add-canteen.component.css'],
})
export class AddCanteenComponent implements OnInit {
  progressBar = false;
  canteen: Canteen = {} as Canteen;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private canteenService: CanteenService) {}

  ngOnInit(): void {
    if (this.data.idCanteen != null) {
      this.canteenService.findCanteen(this.data.idCanteen).subscribe((canteen) => {
        this.canteen = canteen;
      });
    }
  }
  addCanteen() {
    this.progressBar = true;
    if (this.data.id == null) {
      this.canteenService.addCanteen(this.canteen).subscribe((canteen) => {
        this.canteen = canteen;
        window.location.reload();
      });
    } else {
      this.canteenService.updateCanteen(this.canteen, this.data.idCanteen).subscribe((canteen) => {
          this.canteen = canteen;
          window.location.reload();
        });
    }
  }
}

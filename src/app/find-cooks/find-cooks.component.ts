import { AddRecipeComponent } from './../add-recipe/add-recipe.component';
import { CookService } from './../service/cook.service';
import { Cook } from './../modal/Modal';
import { AddCookComponent } from './../add-cook/add-cook.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-cooks',
  templateUrl: './find-cooks.component.html',
  styleUrls: ['./find-cooks.component.css'],
})
export class FindCooksComponent implements OnInit {
  cooks: Cook[] = [];

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private cookService: CookService) {
    this.route.params.subscribe(
      params => {
          if(this.route.snapshot.params.id != null) {
            this.cookService.findCooks(this.route.snapshot.params.id).subscribe((cooks) => {
              this.cooks = cooks;
            })
          }
      }
    )
  }

  ngOnInit(): void {

  }

  addCook() {
    const id = this.route.snapshot.params.id;
    this.dialog.open(AddCookComponent, {
      height: '320px',
      width: '400px',
      data: { id },
    });
  }
  addRecipe(id: number) {
    this.dialog.open(AddRecipeComponent, {
      height: '390px',
      width: '400px',
      data: { id },
    });
  }
  updateCook(idCook: number) {
    this.dialog.open(AddCookComponent, {
      height: '320px',
      width: '400px',
      data: { idCook },
    });
  }
  deleteCook(id: number) {
    if(confirm('Are you sure')) {
      this.cookService.deleteCook(id).subscribe(() => {
        window.location.reload();
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AddComponent } from '../add/add.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.scss']
})
export class TouristComponent implements OnInit {

  constructor(private dialog:MatDialog ){
  }

  openDialog() {
    this.dialog.open(AddComponent, {
     width: "60%"
    })
  }
  ngOnInit(): void {
  }

}

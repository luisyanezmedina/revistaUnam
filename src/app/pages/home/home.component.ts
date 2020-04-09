import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogbodyComponent, dialogConfig);
  }
  



}// class

import { Component, OnInit ,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
import {MatDialogRef,MAT_DIALOG_DATA  } from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public message:string){}
    
  ) { }

  ngOnInit(): void {
  }

  onclickNo(){
    this.dialogRef.close();
  }
}

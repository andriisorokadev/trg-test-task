import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  chengedData: any;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {}

  public close() {
    this.dialogRef.close(null);
  }

  public confirm() {
    this.dialogRef.close({ newValue: this.chengedData, nameToRemove: this.data.element.name })
  }

  public onChange(key: 'name' | 'lat' | 'lng', value: any): void {
     if (key === 'name') {
      this.chengedData = {
        ...this.data.element,
        name: value.target.value
      }
     } else {
      this.chengedData = {
        ...this.data.element,
        coordinates: {
          ...this.data.element.coordinates,
          [key]: Number(value.target.value)
        }
      }
     };
  }
}

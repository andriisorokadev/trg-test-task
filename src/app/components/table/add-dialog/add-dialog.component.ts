import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  newMarker: any;
  isButtonConfirmDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>
  ) { }

  ngOnInit(): void {}

  public close() {
    this.dialogRef.close(null);
  }

  public confirm() {
    this.dialogRef.close(this.newMarker);
  }

  public onChange(key: 'name' | 'lat' | 'lng', value: any): void {
     if (key === 'name') {
      this.newMarker = {
        ...this.newMarker,
        name: value.target.value
      }
     } else {
      this.newMarker = {
        ...this.newMarker,
        coordinates: {
          ...this.newMarker?.coordinates,
          [key]: Number(value.target.value)
        }
      }
     };

     if (this.newMarker.name && this.newMarker?.coordinates?.lat && this.newMarker?.coordinates?.lng) {
      this.isButtonConfirmDisabled = false;
     }
  }

}

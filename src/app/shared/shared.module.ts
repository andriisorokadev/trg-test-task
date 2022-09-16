import { NgModule } from '@angular/core';

import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    DialogWindowComponent,
    CustomButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    DialogWindowComponent,
    CustomButtonComponent
  ]
})
export class SharedModule { }
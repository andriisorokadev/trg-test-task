import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit {
  @Input() isButtonConfirmDisabled = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  public close() {
    this.onClose.emit();
  }

  public confirm() {
    this.onConfirm.emit();
  }

}

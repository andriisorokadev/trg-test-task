import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonWidth = '100';
  @Input() buttonText = '';
  @Input() buttonPadding = '10px'
  @Output() onCLick = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {}

  public onButtonClick(): void {
    this.onCLick.emit();
  }

}

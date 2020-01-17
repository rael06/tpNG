import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-zoomer',
  templateUrl: './zoomer.component.html',
  styleUrls: ['./zoomer.component.scss']
})
export class ZoomerComponent implements OnInit {
  @Output() eventChangeSize: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

    changeSize($event: boolean) {
        this.eventChangeSize.emit($event);
    }
}

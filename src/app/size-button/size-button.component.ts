import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-size-button',
    templateUrl: './size-button.component.html',
    styleUrls: ['./size-button.component.scss']
})
export class SizeButtonComponent implements OnInit {
    @Input() type: string;
    @Output() eventSizeButtonClicked: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    sizeButtonClicked() {
        this.eventSizeButtonClicked.emit(this.type === '+');
    }
}

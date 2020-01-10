import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
    @Output() textChangedEvent: EventEmitter<string> = new EventEmitter<string>();
    private text = '';

    constructor() {
    }

    ngOnInit() {
    }

    onKey($event: KeyboardEvent) {
        this.text = ($event.target as HTMLInputElement).value;
        this.textChangedEvent.emit(this.text);
    }
}

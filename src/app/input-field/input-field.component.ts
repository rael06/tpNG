import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
    @Input() text = '';
    @Output() textChanged: EventEmitter<string> = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
    }

    onModelChange(value: string) {
        this.textChanged.emit(value);
    }
}

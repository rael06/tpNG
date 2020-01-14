import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private fontSize = 20;
    @Input() fieldValue: string;

    constructor() {
    }

    ngOnInit() {
    }

    changeSize($event: boolean) {
        $event ? this.fontSize++ : this.fontSize--;
    }

    changeText($event: string) {
        this.fieldValue = $event;
    }
}

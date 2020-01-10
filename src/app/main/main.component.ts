import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    private fontSize = 20;
    private fieldValue: string;

    constructor() {
    }

    ngOnInit() {
    }

    changeSize($event: boolean) {
        $event ? this.fontSize++ : this.fontSize--;
        console.log(this.fontSize);
    }

    changeTitle($event: string) {
        this.fieldValue = $event;
        console.log(this.fieldValue);
    }
}

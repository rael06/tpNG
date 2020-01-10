import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
    @Input() size: number;
    @Input() title: string;
    private readonly elem: HTMLDivElement;

    constructor(
        private elementRef: ElementRef
    ) {
        this.elem = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.title = 'Mon Titre';
    }

    ngOnChanges() {
        const titleDiv: HTMLDivElement = this.elem.querySelector('#app-title') as HTMLDivElement;
        titleDiv.style.fontSize = this.size + 'px';
    }

}

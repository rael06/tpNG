import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AlertSizePipe} from '../alert-size.pipe';
import {CheckService} from '../check.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
    @Input() size: number;
    @Input() title: string;
    validity: string;
    // private alert = 'Out of range';
    private message: string | number;
    private alertSize = false;

    constructor(
        private alertSizePipe: AlertSizePipe,
        private checkSize: CheckService
    ) {
    }


    ngOnInit() {
        this.title = 'Mon Titre';
    }

    ngOnChanges() {
        this.validity = this.checkSize.isValid(this.size) ? 'valide' : 'invalide';
        this.alertSize = this.alertSizePipe.transform(this.size, 18, 22) === this.alertSizePipe.outOfRange;
        this.message = this.alertSize ?
            this.alertSizePipe.outOfRange :
            'La taille est de ' + this.alertSizePipe.transform(this.size, 18, 22);
    }
}

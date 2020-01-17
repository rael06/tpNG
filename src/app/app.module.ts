import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {TitleComponent} from './title/title.component';
import {ZoomerComponent} from './zoomer/zoomer.component';
import {SizeButtonComponent} from './size-button/size-button.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {FormsModule} from '@angular/forms';
import { AlertSizePipe } from './alert-size.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        TitleComponent,
        ZoomerComponent,
        SizeButtonComponent,
        InputFieldComponent,
        AlertSizePipe,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        AlertSizePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

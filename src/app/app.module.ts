import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TitleComponent } from './title/title.component';
import { ZoomerComponent } from './zoomer/zoomer.component';
import { SizeButtonComponent } from './size-button/size-button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TitleComponent,
    ZoomerComponent,
    SizeButtonComponent,
    InputFieldComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

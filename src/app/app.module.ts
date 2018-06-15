import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component' ;
import {ElementComponent} from './elements/elements.component';
import {ElementService} from './elements/element.services';
import {TemplateComponent} from './template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ElementComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

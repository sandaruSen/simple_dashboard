import { Component } from '@angular/core';

import {NavComponent} from './nav/nav.component';
import {ElementComponent} from './elements/elements.component';
import {TemplateComponent} from './template/template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

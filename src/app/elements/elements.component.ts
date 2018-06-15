import {Component, OnInit} from '@angular/core';
import {ElementService} from './element.services';
import {Element} from './element';

@Component({
    selector: 'element',
    templateUrl:'./element.component.html',
    styles:[``]
    
})

export class ElementComponent{
    elements: Element[];
    componentList: String[];
    constructor(private elementService: ElementService){}
    ngOnInit(){
        this.elements=this.elementService.getElements();
    }

    addComponent(name: string): void {
        this.elementService.addComponent(name);
        // this.componentList.push(name);
        console.log(name);
    }
    
}
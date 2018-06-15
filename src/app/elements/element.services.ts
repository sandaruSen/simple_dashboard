import {Injectable} from '@angular/core';
import {ElementComponent} from './elements.component';
import {ELEMENTS} from './mock-elements';
import {Element} from './element';

@Injectable()
export class ElementService{
  componentList: String[];
  componentIndex: number;
  getElements(): Element[]{
      return ELEMENTS;
  }  
  addComponent(name: String):void{
    this.componentList.push(name);
    console.log(name);
  }
  removeComponent(name: String):void{
    this.componentIndex=this.componentList.indexOf(name);
    this.componentList=this.componentList.splice(this.componentIndex,1);
  }
}
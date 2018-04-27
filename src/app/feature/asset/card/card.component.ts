import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, FclistdataComponent, FcmodalOption, FcadformOption, FcadformComponent, FctabmainComponent, TreeOptions, FctreeComponent } from 'fccomponent';
@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styles: [`
      .div{
          width: 100%;
          background-color: #fff;
      }
      .div1{
          width: 80%;
          background-color: red;
      }
  `]
})
export class CardComponent {
  appId: string = "";
  code: string[] = ['ni', 'wo', 'ta'];
  constructor() { }
}
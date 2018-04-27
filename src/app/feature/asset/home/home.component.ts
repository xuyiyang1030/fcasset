import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentComponent, FclistdataComponent, FcmodalOption, FcadformOption, FcadformComponent, FctabmainComponent, TreeOptions, FctreeComponent } from 'fccomponent';
import { ProvidersService } from 'fccore';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
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
export class HomeComponent implements OnInit {
  appId: string = "";
  userName: string = "";
  code: string[] = ['ni', 'wo', 'ta'];
  constructor(private provider: ProvidersService) {
   };
  ngOnInit () {
    let user = this.provider.userService.getUserInfo();
    this.userName = user.USERCODE;
    alert(this.userName);
  }
}
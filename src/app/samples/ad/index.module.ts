import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { adRouters } from './index.route';
import {
  FcbasicModule,
  FclayoutModule,
  FcadModule,
  FcnavModule,
  FclistModule,
  FctlbModule
} from 'fccomponent';
import { AdformComponent } from './adform/adform.component';
import { AddetailComponent } from './addetail/addetail.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adRouters),
    FclistModule,
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FctlbModule
  ],
  exports: [

  ],
  declarations: [
    AdformComponent,
    AddetailComponent
  ],
  providers: [

  ]
})
export class AdModule { }

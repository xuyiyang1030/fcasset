import { NgModule } from '@angular/core';
import { Routers } from './index.route';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../system/components/home/home.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    FcnavModule,
    FcbasicModule,
    FcadModule,
    FcmodalModule,
    FctabModule,
    FctlbModule,
    FcsearchModule,
    FcalertModule,
    FclayoutModule,
    FclistModule,
    FcchartModule
  } from 'fccomponent';
@NgModule({
    imports: [
        FcnavModule,
        FcbasicModule,
        FcadModule,
        FcmodalModule,
        FctabModule,
        FctlbModule,
        FcsearchModule,
        FcalertModule,
        FclayoutModule,
        FclistModule,
        FcchartModule,
        CommonModule,
        RouterModule.forChild(Routers)
    ],
    exports: [
    ],
    declarations: [
        HomeComponent,
        CardComponent
    ],
    providers: [
    ]
})
export class AssetModule { }
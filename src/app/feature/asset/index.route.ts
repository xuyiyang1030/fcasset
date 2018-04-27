import { Routes } from '@angular/router';
import { HomeComponent } from '../../system/components/home/home.component';
import { CardComponent } from './card/card.component';
export const Routers: Routes = [
    {
        path: 'home',
        component: HomeComponent
    } , {
        path: 'card',
        component: CardComponent
    }    
]
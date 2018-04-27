import { Injectable } from '@angular/core';
import { ProvidersService, ParentService } from 'fccore';
@Injectable()
export class HomeService extends ParentService {
    constructor(public providers: ProvidersService) {
        super(providers, "SYSAPP");
    }
}
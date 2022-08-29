// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { CommonModule } from '../../common/common.module';
import { SharedModule } from './../../../shared/shared.module';

// Component
import { HomeComponent } from './home.component';

// Routes
import { homeRoutes } from './home.routing';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        CommonModule,
        SharedModule
    ]
})
export class HomeModule { }

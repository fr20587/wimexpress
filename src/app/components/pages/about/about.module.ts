// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '../../common/common.module';

// Component
import { AboutComponent } from './about.component';

// Routes
import { aboutRoutes } from './about.routing';


@NgModule({
    declarations: [
        AboutComponent,
    ],
    imports: [
        RouterModule.forChild(aboutRoutes),
        CommonModule,
        SharedModule,
    ]
})
export class AboutModule { }

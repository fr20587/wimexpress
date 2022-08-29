// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { CommonModule } from '../../common/common.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Component
import { ContactComponent } from './contact.component';

// Routes
import { contactRoutes } from './contact.routing';


@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        RouterModule.forChild(contactRoutes),
        CommonModule,
        SharedModule
    ]
})
export class ContactModule { }

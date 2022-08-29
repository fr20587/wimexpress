// Angular Modules
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        PreloaderComponent,
        SubscribeComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        PreloaderComponent,
        SubscribeComponent,
    ],
})
export class CommonModule { }

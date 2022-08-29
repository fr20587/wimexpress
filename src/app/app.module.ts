// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Modules
import { AboutModule } from './components/pages/about/about.module';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from './components/common/common.module';
import { ContactModule } from './components/pages/contact/contact.module';

// Components
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';


@NgModule({
    declarations: [
        AppComponent,
        ComingSoonComponent,
        ErrorComponent,
        FaqComponent,
        GalleryComponent,
        PrivacyPolicyComponent,
        ServicesComponent,
        ServicesDetailsComponent,
        SignInComponent,
        SignUpComponent,
        TeamComponent,
        TermsConditionsComponent,
        TestimonialsComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,

        // Modules
        AboutModule,
        ContactModule,
        CommonModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

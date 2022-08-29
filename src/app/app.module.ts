// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Modules
import { AboutModule } from './components/pages/about/about.module';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from './components/common/common.module';
import { ContactModule } from './components/pages/contact/contact.module';

// Components
import { AppComponent } from './app.component';

import { TeamComponent } from './components/pages/team/team.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';

@NgModule({
  declarations: [
    AppComponent,

    TeamComponent,
    TestimonialsComponent,
    GalleryComponent,
    FaqComponent,
    SignInComponent,
    SignUpComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ComingSoonComponent,
    ErrorComponent,
    ServicesComponent,
    ServicesDetailsComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

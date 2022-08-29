// Angular Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';

const routes: Routes = [
    // Redirect empty path to '/home'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Home
    {path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)},

    // About
    {path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule)},

    // Contact
    {path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule)},

    {path: 'team', component: TeamComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},




    {path: '**', component: ErrorComponent} // This line will remain down from the whole component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

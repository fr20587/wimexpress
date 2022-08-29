// Angular Modules
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Third's Modules
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Services
import { ContactService } from './contact.service';

@Component({
  selector: 'ath-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

    // Viewchild properties
    @ViewChild('contactNgForm') contactNgForm: NgForm;

    // Public properties
    public contactFormSubmitted: boolean = false;
    public contactForm: FormGroup;

    // Private properties
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _contactService: ContactService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: FormBuilder,
        private _router: Router,
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------


  ngOnInit(): void {

    this.contactForm = this._formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]],
    });

  }


    /**
     * On destroy
     */
     ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Send Message
     */
    public sendMessage(): void {

        // Set submitted status to true
        this.contactFormSubmitted = true;

        // Do nothing if the form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        // Get Message Data
        const message = this.contactForm.getRawValue();

        this._contactService.sendMessage(message)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                // // Trigger the snackbar
                // this._snackBar.open('Mensaje Recibido', 'OK', {
                //     panelClass: 'success',
                //     verticalPosition: 'top',
                //     duration: 3600,
                // });

                // Reset the form
                this.contactForm.reset();

                // Change the page
                this._router.navigate(['/home']);

                // Mark for check
                this._changeDetectorRef.markForCheck();
            })
    }
}

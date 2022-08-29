// Angular Modules
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ath-subscribe',
    templateUrl: './subscribe.component.html'
})
export class SubscribeComponent implements OnInit {

    // Public properties
    public email: FormControl = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

}

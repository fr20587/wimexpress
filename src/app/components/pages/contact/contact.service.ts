// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Third's Modules
import { Observable } from 'rxjs';

// Types
import { Message } from './contact.types';

// Environment
import { environment } from 'src/environments/environment';
const API_URL = 'environment.API_URL';

/**
 * Contact Service
 *
 * @export
 * @class ContactService
 */
@Injectable({
    providedIn: 'root'
})
export class ContactService {

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient
    ) { }

    /**
     * Send message
     *
     * @param {Message} message
     * @return {Observable<{ok: boolean, message: string}>}
     * @memberof ContactService
     */
    public sendMessage(message: Message): Observable<{ok: boolean, message: string}> {
        return this._httpClient.post<{ok: boolean, message: string}>(`${API_URL}/bot`,  message );
    }
}

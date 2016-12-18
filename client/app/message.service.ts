import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Message } from './message';

@Injectable()

export class MessageService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = '/message';

    constructor(@Inject(Http) private http: Http) { }

    send(message: Message): Observable<any> {
        return this.http
            .post(this.url, JSON.stringify({ message }), { headers: this.headers });
    }
}
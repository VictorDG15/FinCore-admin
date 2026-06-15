import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay } from 'rxjs';
import { RequestStatus } from '../models/enums';
import { InternalRequest } from '../models/request.model';
import { REQUESTS_MOCK } from './mock-data';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private readonly requestsSubject = new BehaviorSubject<InternalRequest[]>([...REQUESTS_MOCK]);

  getRequests(): Observable<InternalRequest[]> {
    return this.requestsSubject.asObservable().pipe(delay(300));
  }

  updateStatus(id: string, status: RequestStatus): Observable<InternalRequest | undefined> {
    const requests = this.requestsSubject.value;
    const updated = requests.find((request) => request.id === id);

    if (!updated) {
      return new BehaviorSubject<InternalRequest | undefined>(undefined).asObservable().pipe(delay(200));
    }

    const nextValue = { ...updated, status };
    this.requestsSubject.next(requests.map((request) => request.id === id ? nextValue : request));
    return new BehaviorSubject(nextValue).asObservable().pipe(delay(300));
  }
}

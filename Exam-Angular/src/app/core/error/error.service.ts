import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  apiError$$ = new BehaviorSubject(null)
  constructor() { }

  setError(err: any): void {
    this.apiError$$.next(err)
  }

}

import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  apiError$ = this.errorService.apiError$$.asObservable();

  errMsg = '';

  constructor(private errorService: ErrorService) { }

  ngOnInit(): void {
    this.apiError$.subscribe((err: any) => {
      this.errMsg = err.message
    })
  }

}
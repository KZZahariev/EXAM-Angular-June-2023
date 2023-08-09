import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit {

  isAuthenticated = true;

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => {
        this.isAuthenticated = false;
      },
      error: () => {
        this.isAuthenticated = false;
      },
      complete: () => {
        this.isAuthenticated = false;
      },
    })
  }

}

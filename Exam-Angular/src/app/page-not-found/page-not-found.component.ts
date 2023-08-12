import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit{

  isLoggedIn: boolean = false

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLogged
  }

}

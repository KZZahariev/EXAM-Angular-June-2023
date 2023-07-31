import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) {  }

  get isLogged(): boolean {
    return this.userService.isLogged
  }

  get userName(): string {
    return this.userService.user?.username || '';
  }

  logout(){
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        console.log('Can not logout right now');
      }
    })
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS

  constructor(private userService: UserService, private router: Router){ }

  login(form: NgForm): void{
    if (form.invalid) {
      return console.log('The form is invalid!')
    }

    const { email, password } = form.value

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/'])
    })

  }

}

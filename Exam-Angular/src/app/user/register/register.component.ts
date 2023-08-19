import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators/email.validators';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { matchPasswordValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  emailDomains = DEFAULT_EMAIL_DOMAINS
  
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', Validators.required]
      },
      {
        validators: [matchPasswordValidator('password', 'rePassword')]
      }
    )
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  register(): void {
    if(this.form.invalid){
      throw new Error('form is invalid')
    }

    const { username, email, passGroup:{password, rePassword} = {} } = this.form.value

    this.userService.register(username!, email!, password!, rePassword!).subscribe(()=>{
      this.router.navigate(['/'])
    })

  }

}

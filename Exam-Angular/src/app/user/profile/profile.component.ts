import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { appEmailValidator } from 'src/app/shared/validators/email.validators';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

interface Profile {
  username: string,
  email: string,
  posts: string,  
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false

  profileDetails: Profile | undefined = {
    username: '',
    email: '',
    posts: ''
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: [
      '',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]
    ],
    posts: ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    const { username, email, posts } = this.userService.user!;
    this.profileDetails = {
      username,
      email,
      posts
    };

    this.form.setValue({
      username,
      email,
      posts
    })
  };

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode
  };

  saveProfileHandler(): void {
    if (this.form.invalid) {
      return
    }

    this.profileDetails = { ...this.form.value } as Profile;
    const { username, email } = this.profileDetails
    this.userService.updateProfile( username!, email! ).subscribe(() => {
    })
    this.toggleEditMode();
  };
  
  cancel(): void {
    this.toggleEditMode()
  }
}

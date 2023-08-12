import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { Announcement } from 'src/interfaces/announcement';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss'],
})
export class EditAnnouncementComponent implements OnInit {
  announcement: Announcement | undefined;

  // profileDetails: Announcement | undefined = {
  //   from: '',
  //   to: '',
  //   price: '',
  //   date: '',
  //   seats: '',
  //   description: ''
  //     }

  // form = this.fb.group({

  // })

  // constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // const { from, to, price, date, seats, description } = ;
    // this.profileDetails = {
    //   from,
    //   to,
    //   price,
    //   date,
    //   seats,
    //   description,
    // };
    //   this.form.setValue({
    //     username,
    //     email,
    //     posts,
    //   });
    // }
  }

  saveAnnouncementHandler() {}
}

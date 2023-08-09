import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss'],
})
export class NewAnnouncementComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addNewAnnouncement(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { from, to, price, date, seats, description } = form.value; ///tuka da vzemem dannite

    console.log(form.value);
    this.apiService.createNewAnnouncement(from, to, price, date, seats, description).subscribe(() => {
      this.router.navigate(['/announcements']); 
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ApiService } from '../api.service';
import { Announcement } from 'src/interfaces/announcement';


@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.scss']
})
export class AnnouncementsListComponent implements OnInit {

  announcementList: Announcement[] | null = null;
  errorFetchingData: boolean = true;
  isLoading: boolean = true;
    
  constructor(private apiService: ApiService, private userService: UserService){}

  get isLogged(): boolean{
    return this.userService.isLogged
  }

  ngOnInit(): void {
    
    this.apiService.loadAnnouncements().subscribe({
      next: (value) => {
        console.log(value);
        this.announcementList = value;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorFetchingData = false;
        this.isLoading = false;
      }
    })

  }
}

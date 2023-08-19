import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/interfaces/announcement';
import { User } from 'src/interfaces/user';

@Component({
  selector: 'app-my-announcements',
  templateUrl: './my-announcements.component.html',
  styleUrls: ['./my-announcements.component.scss']
})
export class MyAnnouncementsComponent  {
  announcementList: Announcement[] | null = null;
  user: User | null = null;
  errorFetchingData: boolean = true;
  isLoading: boolean = true;

  
}

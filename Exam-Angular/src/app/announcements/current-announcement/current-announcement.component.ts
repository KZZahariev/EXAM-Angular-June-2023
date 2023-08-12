import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Announcement } from 'src/interfaces/announcement';

@Component({
  selector: 'app-current-announcement',
  templateUrl: './current-announcement.component.html',
  styleUrls: ['./current-announcement.component.scss'],
})
export class CurrentAnnouncementComponent implements OnInit {
  announcement: Announcement | undefined;
  
  constructor(
    private apiService: ApiService,
    private activateRouter: ActivatedRoute,
    private userService: UserService
    ) { console.log(this.isOwner);
      console.log(this.currentUserId);
      console.log(this.announcement?.userId);

    }
    
    get isLogged(): boolean{
      return this.userService.isLogged
    }

    get currentUserId(): any {
      return this.userService.getUserIdFunction()
    }
    
    
    get isOwner(): boolean {
      return this.announcement?.userId === this.currentUserId
    }

    ngOnInit(): void {
      this.fetchAnnouncement()
  }
  
  fetchAnnouncement(){
    const id = this.activateRouter.snapshot.params['announcementId']
    
    this.apiService.loadAnnouncement(id).subscribe((announcement) => {
      this.announcement = announcement;
    })
  }

  saveAnnouncementHandler(){
    
  }
  // get isOwner(): boolean {
  // }
  
}

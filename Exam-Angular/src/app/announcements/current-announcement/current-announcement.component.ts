import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isEditMode: boolean = false;

  constructor(
    private apiService: ApiService,
    private activateRouter: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUserId(): any {
    return this.userService.getUserIdFunction();
  }

  get isOwner(): boolean {
    return this.announcement?.userId === this.currentUserId;
  }

  // get isReserved(): boolean {
  //   return this.announcement?.subscribers.find(this.currentUserId)
  // }
  
  isReserved(){
    return this.announcement?.subscribers.includes(this.currentUserId);
  }


  ngOnInit(): void {
    this.fetchAnnouncement();
  }

  
  fetchAnnouncement() {
    const id = this.activateRouter.snapshot.params['announcementId'];
    
    this.apiService.loadAnnouncement(id).subscribe((announcement) => {
      this.announcement = announcement;
    });
  }
  
  
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveAnnouncementHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // this.profileDetails = { ...form.value } as Announcement;
    const id = this.activateRouter.snapshot.params['announcementId'];
    const { from, to, price, date, seats, description } = form.value;
    this.apiService.updateAnnouncement(from!, to!, price!, date!, seats!, description!, id!).subscribe((announcement) => {
      this.toggleEditMode();
    });
  };

  deleteAnnouncementHandler(): void {
    const id = this.activateRouter.snapshot.params['announcementId'];

    this.apiService.deleteAnnouncement(id!).subscribe((announcement)=>{
    })
    this.router.navigate(['/announcements'])
  }

  subscribeForTraveling(){
    const announcementId = this.activateRouter.snapshot.params['announcementId'];

    this.apiService.subscribeAnnouncement(announcementId).subscribe((announcement) => {
      console.log(announcementId);
      location.reload()
    })
  }

  cancel(): void {
    this.toggleEditMode()
  }

}

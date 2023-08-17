import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { RouterModule } from '@angular/router';
// import { AnnouncementRoutingModule } from './announcement.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentAnnouncementComponent } from './current-announcement/current-announcement.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';

@NgModule({
  declarations: [NewAnnouncementComponent, CurrentAnnouncementComponent, MyAnnouncementsComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ], //AnnouncementRoutingModule,
})
export class AnnouncementModule {}

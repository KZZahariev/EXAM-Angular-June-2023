import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { RouterModule } from '@angular/router';
import { AnnouncementRoutingModule } from './announcement.routing.module';

@NgModule({
  declarations: [NewAnnouncementComponent],
  imports: [CommonModule, RouterModule, AnnouncementRoutingModule],
})
export class AnnouncementModule {}

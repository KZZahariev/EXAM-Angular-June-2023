import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentAnnouncementComponent } from './current-announcement/current-announcement.component';

@NgModule({
  declarations: [NewAnnouncementComponent, CurrentAnnouncementComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule ],
})
export class AnnouncementModule {}

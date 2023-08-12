import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { NewAnnouncementComponent } from './announcements/new-announcement/new-announcement.component';
import { CurrentAnnouncementComponent } from './announcements/current-announcement/current-announcement.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ErrorComponent } from './core/error/error.component';
import { EditAnnouncementComponent } from './announcements/edit-announcement/edit-announcement.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'announcements',
    component: AnnouncementsListComponent,
  },
  {
    path: 'add-announcement',
    component: NewAnnouncementComponent,
  },
  {
    path: 'announcements/:announcementId',
    component: CurrentAnnouncementComponent,
  },
  {
    path: 'announcements/:announcementId/edit',
    component: EditAnnouncementComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

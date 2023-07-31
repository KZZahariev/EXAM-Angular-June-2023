import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';

const routes: Routes = [
    {
        path: 'announcements',
        children: [
            {
                path:'',
                pathMatch: 'full',
                component: MainComponent
            },
            // {
            //     path: ':announcementId',
            //     component: MainComponent
            // }
        ]
    },
    {
        path: 'add-announcement',
        component: NewAnnouncementComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AnnouncementRoutingModule { }
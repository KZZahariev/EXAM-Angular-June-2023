import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UserRouterModule } from './user/user-routing.module';
import { appInterceptorProvider } from './app.interceptor';
import { AnnouncementModule } from './announcements/announcement.module';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainComponent,
        AnnouncementsListComponent,
        AuthenticatorComponent,
        AboutComponent,
        PageNotFoundComponent,
        AnnouncementsListComponent,
    ],
    providers: [appInterceptorProvider],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserRouterModule,
        HttpClientModule,
        CoreModule,
        AnnouncementModule,
        UserModule,
        SharedModule
    ]
})
export class AppModule { }

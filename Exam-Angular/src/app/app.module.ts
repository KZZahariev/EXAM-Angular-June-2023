import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRouterModule } from './user/user-routing.module';
import { appInterceptorProvider } from './app.interceptor';
import { AnnouncementModule } from './announcements/announcement.module';
import { AnnouncementsListComponent } from './announcements-list/announcements-list.component';
import { AuthenticatorComponent } from './authenticator/authenticator.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainComponent,
        AnnouncementsListComponent,
        AuthenticatorComponent,
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserRouterModule,
        HttpClientModule,
        CoreModule,
        AnnouncementModule
        
    ],
    providers: [appInterceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule { }

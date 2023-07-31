import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRouterModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { appInterceptorProvider } from './app.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserRouterModule,
        HttpClientModule,
        CoreModule,
        UserModule,
        
    ],
    providers: [appInterceptorProvider],
    bootstrap: [AppComponent],
})
export class AppModule { }

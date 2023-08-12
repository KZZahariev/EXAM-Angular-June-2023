import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailDirective } from './validators/email.directive';
import { LoaderComponent } from './loader/loader.component';
import { ReserveComponent } from './reserve/reserve.component';




@NgModule({
  declarations: [
    EmailDirective,
    LoaderComponent,
    ReserveComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective,
    LoaderComponent
  ],
 
})
export class SharedModule { }

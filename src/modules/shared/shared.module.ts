import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

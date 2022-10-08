import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { MainBodyTopComponent } from './main-body/main-body-top/main-body-top.component';
import { MainBodyMiddleComponent } from './main-body/main-body-middle/main-body-middle.component';
import { MainBodyBottomComponent } from './main-body/main-body-bottom/main-body-bottom.component';

const components = [
  MainComponent,
  MainHeaderComponent,
  MainBodyComponent,
  MainFooterComponent,
  MainBodyTopComponent,
  MainBodyMiddleComponent,
  MainBodyBottomComponent
];

@NgModule({
  declarations: components,
  exports: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
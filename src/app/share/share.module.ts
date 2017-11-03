import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BannerComponent} from "../banner/banner.component";
import {NavComponent} from "../nav/nav.component";
import {ReturnTopComponent} from "../return-top/return-top.component";
import {RouterModule} from "@angular/router";
import {StrPipe} from "../pipe/str.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    BannerComponent,
    NavComponent,
    ReturnTopComponent,
    StrPipe
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    BannerComponent,
    NavComponent,
    ReturnTopComponent,
    StrPipe
  ]
})
export class ShareModule { }

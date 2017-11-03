import {NgModule} from '@angular/core';

import {PageRoutingModule} from './page-routing.module';
import {BannerComponent} from '../banner/banner.component';
import {NavComponent} from "../nav/nav.component";
import {ShareModule} from "../share/share.module";
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { ReturnTopComponent } from '../return-top/return-top.component';
import { ZsIndustryComponent } from './zs-industry/zs-industry.component';
import {BannerService} from "../service/banner.service";
import {ArticleService} from "../service/article.service";

@NgModule({
  imports: [
    ShareModule,
    PageRoutingModule
  ],
  declarations: [
    PageComponent,
    HomeComponent,
    ZsIndustryComponent
  ],
  providers:[
    BannerService,
    ArticleService
  ]
})
export class PageModule { }

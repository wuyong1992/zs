import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageComponent} from "./page.component";
import {HomeComponent} from "./home/home.component";
import {ZsIndustryComponent} from "./zs-industry/zs-industry.component";

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'zs-industry',
        component:ZsIndustryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}

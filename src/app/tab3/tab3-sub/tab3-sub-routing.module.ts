import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3SubPage } from './tab3-sub.page';

const routes: Routes = [
  {
    path: ':someParam',
    component: Tab3SubPage
  },
  {
    path: '**',
    component: Tab3SubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3SubPageRoutingModule {}

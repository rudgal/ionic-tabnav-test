import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'tab3-sub',
    loadChildren: () => import('./tab3-sub/tab3-sub.module').then( m => m.Tab3SubPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}

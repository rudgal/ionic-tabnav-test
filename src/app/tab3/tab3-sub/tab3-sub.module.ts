import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3SubPageRoutingModule } from './tab3-sub-routing.module';

import { Tab3SubPage } from './tab3-sub.page';
import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3SubPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [Tab3SubPage]
})
export class Tab3SubPageModule {}

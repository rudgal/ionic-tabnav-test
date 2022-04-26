import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private navCtrl: NavController) {}

  async goToTab3Sub() {
    await this.navCtrl.navigateForward(['tabs', 'tab3', 'tab3-sub', 'fromTab3']);
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab3-sub',
  templateUrl: './tab3-sub.page.html',
  styleUrls: ['./tab3-sub.page.scss'],
})
export class Tab3SubPage implements OnInit {
  someParam: string;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.params.subscribe(({someParam}) => {
      this.someParam = someParam;
    });
  }

  async close() {
    await this.navCtrl.pop();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy {
  showTabBar = true;
  showTabBarOn = ['/tabs/tab1', '/tabs/tab2', '/tabs/tab3'];

  constructor(private router: Router) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.showTabBar = this.showTabBarOn.includes(event.urlAfterRedirects);
      console.log('test', this.showTabBar, event.urlAfterRedirects);
    });
  }

}

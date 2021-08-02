import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeMain } from 'src/app/animations/animations';

import SwiperCore, { Pagination, Swiper } from 'swiper/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routeMain],
})
export class ProfileComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  userOptions: { [key: string]: any }[] = [
    { value: 'Profile', link: ['/user/profile/my-profile'] },
    { value: 'Themes', link: ['/user/profile/themes'] },
    { value: 'Parties', link: ['/user/profile/played'] },
  ];

  ngOnInit(): void {
    this.document.documentElement.style.setProperty(
      '--swiper-theme-color',
      '#ffe66d'
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
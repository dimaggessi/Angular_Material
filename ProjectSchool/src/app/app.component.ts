import { MenuItem } from './shared/models/menuItem';
import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, fromEvent, map } from 'rxjs';
import { menuItems } from './shared/models/menu';
import { NavigationEnd, Router } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 64;
export const SHADOW_LIMIT = 100;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public smallScreen: boolean = false;
  public popText: boolean = false;
  public applyShadow: boolean = false;
  public items_menu: MenuItem[] = menuItems;
  private breakpointObserver: BreakpointObserver;
  private route: Router;
  public menuName = '';

  constructor() {
    this.breakpointObserver = inject(BreakpointObserver),
    this.route = inject(Router)
  }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop ))
      .subscribe((value: number) => this.determineHeader(value))

      this.route.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
          let moduleName = event.url.split('/')[1];

          this.menuName = this.items_menu.filter(
            (item: MenuItem) => item.link == `/${moduleName}`)[0].label;
        })

  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }


  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)'])
    .subscribe((res) => this.smallScreen = res.matches);
  }

  get sidenavMode() {
    return this.smallScreen ? 'over' : 'side'
  }
}

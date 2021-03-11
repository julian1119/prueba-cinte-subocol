import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { title: 'Dashboard',  icon: 'dashboard', class: '' },
    { title: 'Eventos',  icon:'person', class: '' },
    { title: 'Velocidad',  icon:'content_paste', class: '' },
    { title: 'Vibracion',  icon:'library_books', class: '' },
    { title: 'Configuracion',  icon:'bubble_chart', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

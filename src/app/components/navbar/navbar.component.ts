import { Component, OnInit } from '@angular/core';
import {AppRoutes, appRoutes} from "../../app.routing.module";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuItems: AppRoutes[] = appRoutes.filter(item => item.inMenu != null)
  menuOpened: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenuOpened() {
    this.menuOpened = !this.menuOpened
  }
}

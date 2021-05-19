/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import {Router} from "@angular/router"

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private menuService: NbMenuService) {
      this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }

  ngOnInit() {

  }

  onContecxtItemSelection(title) {
    console.log('click', title);
    if(title === 'Log out') {
      localStorage.removeItem('auth_app_token')
      this.router.navigate(['/auth/login']);
    }
  }
}

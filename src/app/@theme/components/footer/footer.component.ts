import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      <p>Made by Ariel Lobos</p>
      Template powered by <a href='https://github.com/akveo/ngx-admin'>NGX-ADMIN</a>
    </span>
  `,
})
export class FooterComponent {
}

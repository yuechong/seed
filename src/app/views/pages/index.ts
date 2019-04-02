import { Component } from '@angular/core';

@Component({
  selector: 'pages-component',
  template: `
    <div>pages</div>
    <a routerLink="/dashborad">dashborad</a>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class PagesComponent {}

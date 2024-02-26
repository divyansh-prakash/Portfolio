import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  active: number = 1;

  constructor(private router: Router) {

  }

  routeTo(page: string) {
    switch (page) {
      case 'home':
        this.active = 1;
        this.router.navigate(['home']);
        break;

      case 'about':
        this.active = 2;
        this.router.navigate(['about']);
        break;

      case 'project':
        this.active = 3;
        this.router.navigate(['project']);
        break;
    }
  }
}

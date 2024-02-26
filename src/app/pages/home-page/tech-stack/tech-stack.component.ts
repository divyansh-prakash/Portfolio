import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  techStacklist = [
    { name: 'Angular', url: '<i class="fa-brands fa-angular"></i>' },
    { name: 'JavaScript', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'Typescript', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'Angular Material', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'RxJS', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'HTML', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'CSS', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'Bootstrap', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'SCSS', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'OOPs', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'GIT', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'RESTful API integration', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'Core Java', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'MySQL', url: '<i class="fa-brands fa-js"></i>' },
    { name: 'ChartJs', url: '<i class="fa-brands fa-js"></i>' }
  ]
}

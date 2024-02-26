import { Component } from '@angular/core';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { ProjectsComponent } from '../../projects-page/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent, TechStackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // https://1sxy1mt1j4o.typeform.com/to/yBBWQLHs

  openContactMeForm(): void {
    window.open('https://1sxy1mt1j4o.typeform.com/to/yBBWQLHs', '_blank');
  }

  openResume(): void {
    window.open('https://drive.google.com/file/d/1xV49_EXpOa8mKGeVa-ZSSTOTdRc7ByoC/view?usp=drive_link', '_blank');
  }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectList = [
    {
      name: 'LokOs',
      url: '../../../../assets/lokos.png',
      description: "LokOS is a system designed to capture the activities of community based organizations (SHGs, VO, and CLFs) across India. The platform is capable of recording the data of CBO members, i.e., personal details, livelihoods, savings, and financial intermediation within the CBO network. LokOS is helping digitize the CBO activities, which were earlier handled manually on papers.",
      techStack: ['Angular', 'JavaScript', 'Typescript', 'Angular Material', 'RxJS', 'ChartJS', 'CryptoJs', 'BootStrap', 'Figma']
    },
    {
      name: 'Verzekeringen',
      url: '../../../../assets/verzek.png',
      description: "Verzekeringen is the largest insurance comparison platform in Belgium. Verzekeringen.be is a team full of enthusiasm, consisting of IT professionals, marketers and insurance advisors. It helps the people receive simple, clear information and always get the greatest benefit from insurance.",
      techStack: ['Angular', 'JavaScript', 'Typescript', 'RxJS', 'ESLint', 'AdobeXD', 'HTML', 'CSS']
    },
    {
      name: 'Keia',
      url: '../../../../assets/keia.png',
      description: "Keia Ltd is a new destination for wellbeing; from hair & beauty to holistic therapies. It is an online destination that connects practitioners and consumers of wellness services, spanning 27 areas and growing, with a mission to make wellness services accessible and affordable for all.",
      techStack: ['Angular', 'JavaScript', 'Typescript', 'Angular Material', 'RxJS', 'CryptoJs', 'BootStrap', 'SonarQube']
    }
  ]

}

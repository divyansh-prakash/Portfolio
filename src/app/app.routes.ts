import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about-page/about/about.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { ProjectsComponent } from './pages/projects-page/projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,  // children: [{path: '', component: HomeComponent }]
    },
    { path: 'about', component: AboutComponent },
    { path: 'project', component: ProjectsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

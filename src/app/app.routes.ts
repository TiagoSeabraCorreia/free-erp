import { Routes } from '@angular/router';
import { ProjectMainComponent } from './components/project/project-main/project-main.component';
import { ProjectsDashboardComponent } from './components/project/projects-dashboard/projects-dashboard.component';
import { ProjectOverviewComponent } from './components/project/project-overview/project-overview.component';
import { projectRoutes } from './components/project/routes';

export const routes: Routes = [
    ...projectRoutes
];


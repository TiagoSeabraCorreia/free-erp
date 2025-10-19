import { Routes } from "@angular/router";
import { ProjectMainComponent } from "./project-main/project-main.component";
import { ProjectsDashboardComponent } from "./projects-dashboard/projects-dashboard.component";
import { ProjectOverviewComponent } from "./project-overview/project-overview.component";

export const projectRoutes: Routes = [
  { path: 'projects', component: ProjectMainComponent },
  { path: 'projects/dashboard', component: ProjectsDashboardComponent },
  { path: 'projects/:id', component: ProjectOverviewComponent }
];
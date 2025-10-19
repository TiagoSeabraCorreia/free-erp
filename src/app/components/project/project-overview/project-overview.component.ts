import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectStore } from '../store/project.store';
import { CurrentProjectStore } from '../store/current-project.store';
import { AsyncPipe, CommonModule, DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-project-overview',
  imports: [AsyncPipe, DatePipe, CommonModule],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.css'
})
export class ProjectOverviewComponent {
  projectId: string;
  project$;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly currentProjectStore: CurrentProjectStore
  ){
    const tempId = this.activatedRoute.snapshot.paramMap.get('id');
    this.projectId = tempId ? tempId : '';
    this.currentProjectStore.init(this.projectId);
    this.project$ = this.currentProjectStore.currentProjectData$;
  }
}

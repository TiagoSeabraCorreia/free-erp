import { afterNextRender, AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectStore } from '../store/project.store';
import { CurrentProjectStore } from '../store/current-project.store';
import { AsyncPipe, CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { ProjectMainComponent } from "../project-main/project-main.component";
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-project-overview',
  imports: [AsyncPipe, DatePipe, CommonModule, ProjectMainComponent, TaskComponent],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.css',
})
export class ProjectOverviewComponent implements  OnInit {
  projectId: string;
  project$;
  
  isOpen = false;
  

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly currentProjectStore: CurrentProjectStore
  ){
    const tempId = this.activatedRoute.snapshot.paramMap.get('id');
    this.projectId = tempId ? tempId : '';
    this.project$ = this.currentProjectStore.currentProjectData$;
    afterNextRender(() => {
      this.currentProjectStore.init(this.projectId);
    });
  }

  ngOnInit(): void {

  }

  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }


  onViewDetails(){

  }
  onDelete(){

  }

  onEdit(){

  }  
}

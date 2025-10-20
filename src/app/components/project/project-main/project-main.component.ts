import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable, tap } from 'rxjs';
import { HoverDirective } from '../../../global/directives/hover.directive';
import { Project } from '../entity/project.entity';
import { ProjectStore } from '../store/project.store';

@Component({
  selector: 'app-project-main',
  imports: [AsyncPipe, HoverDirective, DatePipe],
  templateUrl: './project-main.component.html',
  styleUrl: './project-main.component.css'
})

export class ProjectMainComponent implements OnInit{

  lastAcessedProject: Project | null = null;
  projects$: Observable<Project[]> | null = null;
  
  constructor(
    private readonly projectStore: ProjectStore,
    private readonly router: Router
  ) {
    this.projectStore.init();
  }

  ngOnInit(): void {
    this.projects$ = this.projectStore.projects$.pipe(
      filter((data) => data != null),
      tap((data) => this.lastAcessedProject = data[0])
    );
  } 

  navigate(id: string){
    this.router.navigate([`/projects/${id}`]);
  }
}

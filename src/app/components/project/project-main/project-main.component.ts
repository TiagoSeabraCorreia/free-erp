import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CurrentProjectStore } from '../store/current-project.store';
import { ProjectStore } from '../store/project.store';
import { AsyncPipe } from '@angular/common';
import { filter, map, Observable, of, tap } from 'rxjs';
import { Project } from '../entity/project.entity';
import { HoverDirective } from '../../../global/directives/hover.directive';

@Component({
  selector: 'app-project-main',
  imports: [AsyncPipe, HoverDirective],
  templateUrl: './project-main.component.html',
  styleUrl: './project-main.component.css'
})

export class ProjectMainComponent implements OnInit{

  lastAcessedProject: Project | null = null;
  projects$: Observable<Project[]> | null = null;

  constructor(
    private readonly projectStore: ProjectStore
  ) {
    this.projectStore.init();
  }

  ngOnInit(): void {
    this.projects$ = this.projectStore.projects$.pipe(
      filter((data) => data != null),
      map((data) => data.splice(0,3)),
      tap((data) => this.lastAcessedProject = data[0])
    );
  }
}

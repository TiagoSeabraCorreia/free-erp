import { Injectable } from "@angular/core";
import { ProjectService } from "../service/project.service";
import { BehaviorSubject, catchError, EMPTY, tap } from "rxjs";
import { Project } from "../entity/project.entity";


@Injectable({
    providedIn: 'root'
})

export class ProjectStore {

    projectsSubject$: BehaviorSubject<Project[] | null> = new BehaviorSubject<Project[] | null>(null);
    projects$ = this.projectsSubject$.asObservable();

    
    constructor(
        private readonly projectService: ProjectService
    ){

    }

    init(){
        this.projectService.getProjects().pipe(
            tap((data) => {
                this.projectsSubject$.next(data);
            }),
            catchError(() => {
                this.projectsSubject$.next([]);
                return EMPTY;
            })
        ).subscribe();
    }
}

